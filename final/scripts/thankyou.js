const params = new URLSearchParams(window.location.search);

const firstname = params.get('firstName');
const lastname = params.get('lastName');