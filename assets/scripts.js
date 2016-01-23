function email_address(name) {
  domain = 'cs.berkeley';
  tld = 'edu';
  document.write(
    '<a href="mailto:' + name + '@' + domain + '.' + tld + '">' +
    name + '@' + domain + '.' + tld + '</a>');
}

function my_phone() {
  area_code = '(626)';
  rest = ' 394' + '-' + '2853';
  document.write(area_code + rest);
}

function long_email_address(tld, domain, name) {
  document.write(
    '<a href="mailto:' + name + '@' + domain + '.' + tld + '">' +
    name + '@' + domain + '.' + tld + '</a>');
}