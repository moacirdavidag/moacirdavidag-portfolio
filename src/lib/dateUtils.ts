export function calculateAge(birthDateString: string = "2002-04-18"): number {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function calculateDuration(
  startDateStr: string,
  endDateStr?: string,
  isCurrent: boolean = false,
  lang: 'pt' | 'en' = 'pt'
): string {
  const start = new Date(startDateStr);
  const end = isCurrent || !endDateStr ? new Date() : new Date(endDateStr);

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  if (lang === 'pt') {
    const yearStr = years === 1 ? '1 ano' : `${years} anos`;
    const monthStr = remMonths === 1 ? '1 mês' : `${remMonths} meses`;

    if (years > 0 && remMonths > 0) return `${yearStr} e ${monthStr}`;
    if (years > 0) return yearStr;
    return monthStr;
  } else {
    const yearStr = years === 1 ? '1 year' : `${years} yrs`;
    const monthStr = remMonths === 1 ? '1 mo' : `${remMonths} mos`;

    if (years > 0 && remMonths > 0) return `${yearStr} ${monthStr}`;
    if (years > 0) return yearStr;
    return monthStr;
  }
}
