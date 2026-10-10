const hero = document.querySelector('.hero');
const closeHeroButton = document.querySelector('.hero-close');
const categoryButtons = document.querySelectorAll('.category-button');
const favoriteButtons = document.querySelectorAll('.favorite-button');
const resetFiltersButton = document.querySelector('[data-clear-filters]');
const filterSearchButton = document.querySelector('.filter-search-button');
const categoryNavigation = document.querySelector('.category-navigation');
const sizeFilterToggle = document.querySelector('.size-filter-toggle');
const sizeDropdown = document.querySelector('.size-dropdown');
const sizeLabel = document.querySelector('[data-size-label]');
const sizeOptions = document.querySelectorAll('.size-option');

if (closeHeroButton && hero) {
  closeHeroButton.addEventListener('click', function () {
    hero.classList.add('is-hidden');
  });
}

if (filterSearchButton && categoryNavigation) {
  filterSearchButton.addEventListener('click', function () {
    const isOpen = categoryNavigation.classList.toggle('is-open');

    if (isOpen) {
      filterSearchButton.setAttribute('aria-expanded', 'true');
    } else {
      filterSearchButton.setAttribute('aria-expanded', 'false');
    }
  });
}

categoryButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    categoryButtons.forEach(function (item) {
      item.classList.remove('is-selected');
      item.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('is-selected');
    button.setAttribute('aria-pressed', 'true');

    if (categoryNavigation && filterSearchButton) {
      categoryNavigation.classList.remove('is-open');
      filterSearchButton.setAttribute('aria-expanded', 'false');
    }
  });
});

if (sizeFilterToggle && sizeDropdown) {
  sizeFilterToggle.addEventListener('click', function () {
    const isOpen = sizeDropdown.hidden;
    sizeDropdown.hidden = !isOpen;

    if (isOpen) {
      sizeFilterToggle.setAttribute('aria-expanded', 'true');
    } else {
      sizeFilterToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

sizeOptions.forEach(function (option) {
  option.addEventListener('click', function () {
    if (sizeLabel) sizeLabel.innerText = option.getAttribute('data-size');
    if (sizeDropdown) sizeDropdown.hidden = true;
    if (sizeFilterToggle) sizeFilterToggle.setAttribute('aria-expanded', 'false');
  });
});

if (resetFiltersButton) {
  resetFiltersButton.addEventListener('click', function () {
    categoryButtons.forEach(function (button, index) {
      const isAllCategory = index === 0;

      if (isAllCategory) {
        button.classList.add('is-selected');
        button.setAttribute('aria-pressed', 'true');
      } else {
        button.classList.remove('is-selected');
        button.setAttribute('aria-pressed', 'false');
      }
    });

    if (sizeLabel) sizeLabel.innerText = 'Talla';
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key !== 'Escape') return;

  if (categoryNavigation && filterSearchButton) {
    categoryNavigation.classList.remove('is-open');
    filterSearchButton.setAttribute('aria-expanded', 'false');
  }

  if (sizeDropdown && sizeFilterToggle) {
    sizeDropdown.hidden = true;
    sizeFilterToggle.setAttribute('aria-expanded', 'false');
  }
});

favoriteButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const isFavorite = button.getAttribute('aria-pressed') === 'true';
    const icon = button.querySelector('img');
    const currentLabel = button.getAttribute('aria-label');

    button.classList.toggle('is-favorite');

    if (isFavorite) {
      button.setAttribute('aria-pressed', 'false');

      if (icon) icon.setAttribute('src', 'assets/icons/icon_heart.png');
    } else {
      button.setAttribute('aria-pressed', 'true');

      if (icon) icon.setAttribute('src', 'assets/icons/icon_heart_red.png');
    }

    if (currentLabel && isFavorite) {
      button.setAttribute(
        'aria-label',
        currentLabel.replace('Quitar', 'Añadir').replace(' de favoritos', ' a favoritos')
      );
    } else if (currentLabel) {
      button.setAttribute(
        'aria-label',
        currentLabel.replace('Añadir', 'Quitar').replace(' a favoritos', ' de favoritos')
      );
    }
  });
});
