import { Company, User, Map } from './classes';

const mapDivName = 'map';

const mapDiv = document.getElementById(mapDivName);
if (mapDiv !== null) {
  const map = new Map('map');

  //adding eventlisteners
  const addUsrBtn = document.getElementById('add-usr-btn');
  const addCompanyBtn = document.getElementById('add-company-btn');

  addUsrBtn?.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    let user = new User();
    map.addMarker(user);
  });

  addCompanyBtn?.addEventListener('click', (e: Event): void => {
    e.preventDefault();
    let company = new Company();
    map.addMarker(company);
  });
}
