const backButton = document.querySelector('.back-button');
const schoolOptions = document.querySelectorAll('.school-option');
const schoolSearchForm = document.querySelector('[data-school-search]');
const schoolSearchInput = document.querySelector('#school-search');
const searchStatus = document.querySelector('[data-search-status]');

if (backButton) {
  backButton.addEventListener('click', function () {
    history.back();
  });
}

if (schoolSearchForm && schoolSearchInput && searchStatus) {
  schoolSearchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchText = schoolSearchInput.value.trim().toLowerCase();
    let visibleSchools = 0;

    schoolOptions.forEach(function (option) {
      const schoolName = option.getAttribute('data-school').toLowerCase();
      const matchesSearch = schoolName.includes(searchText);

      option.hidden = !matchesSearch;

      if (matchesSearch) {
        visibleSchools += 1;
      }
    });

    if (searchText === '') {
      searchStatus.innerText = '';
    } else if (visibleSchools === 1) {
      searchStatus.innerText = 'Se ha encontrado un colegio.';
    } else {
      searchStatus.innerText = `Se han encontrado ${visibleSchools} colegios.`;
    }
  });
}
