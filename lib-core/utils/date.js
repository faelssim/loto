const formatDate = (date, format = 'yyyy-MM-dd') => {
  const _date = date ? new Date(date) : new Date();
  return `${_date.getFullYear()}-${(_date.getMonth() + 1).toString().padStart(2, '0')}-${_date.getDate().toString().padStart(2, '0')}`;
}

export {
  formatDate
}