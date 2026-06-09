const params = new URLSearchParams(window.location.search);

const firstname = params.get('firstName');
const lastname = params.get('lastName');
const orgtitle = params.get('orgTitle');
const email = params.get('email');
const mobile = params.get('mobile');
const orgname = params.get('orgName');
const membership = params.get('membershipLevel');

