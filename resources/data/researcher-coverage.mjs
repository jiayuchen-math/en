// Coverage describes this directory, not the size or quality of a country's community.
export const continentalCountries=['Albania','Andorra','Austria','Belarus','Belgium','Bosnia and Herzegovina','Bulgaria','Croatia','Cyprus','Czech Republic','Denmark','Estonia','Finland','France','Germany','Greece','Hungary','Iceland','Italy','Kosovo','Latvia','Liechtenstein','Lithuania','Luxembourg','Malta','Moldova','Monaco','Montenegro','Netherlands','North Macedonia','Norway','Poland','Portugal','Romania','Russia','San Marino','Serbia','Slovakia','Slovenia','Spain','Sweden','Switzerland','Türkiye','Ukraine','Vatican City'];
const otherRegions={Asia:['China','Hong Kong','India','Indonesia','Israel','Japan','Malaysia','Pakistan','Saudi Arabia','Singapore','South Korea','Taiwan','Thailand','Vietnam'],Americas:['Argentina','Brazil','Canada','Chile','Colombia','Mexico','Peru','US','Uruguay'],Africa:['Egypt','Ghana','Kenya','Morocco','Nigeria','Rwanda','Senegal','South Africa'],Oceania:['Australia','New Zealand']};
export const canonicalCountry=c=>c==='Czechia'?'Czech Republic':c==='Turkey'?'Türkiye':c;
export function countryCoverage(researchers,programmes,before){
 const programmeCountries=programmes.flatMap(p=>p.country.split('|')).map(canonicalCountry);
 const countries=[...new Set([...continentalCountries,'UK','Ireland',...Object.values(otherRegions).flat(),...programmeCountries,...researchers.map(r=>canonicalCountry(r.country))])].filter(c=>c!=='Unverified partner countries').sort();
 return countries.map(country=>{
  const records=researchers.filter(r=>canonicalCountry(r.country)===country),institutions=[...new Set(records.map(r=>r.institution))].sort();
  const rosterSources=[...new Set(records.map(r=>r.affiliationSource||r.official))].sort();
  const region=continentalCountries.includes(country)||['UK','Ireland'].includes(country)?'Europe':Object.entries(otherRegions).find(([,v])=>v.includes(country))?.[0]||'Other / unclassified';
  const status=!records.length?'Not represented yet':records.length<=5?'Very limited sample':institutions.length===1?'Single-institution sample':'Partial multi-institution sample';
  const gap=!records.length?'Add a verified current academic roster; no researchers from this country are currently indexed.':records.length<=5?'Only a few curated entries are indexed; expand beyond individual examples.':institutions.length===1?'Expand to other universities / institutes and check subject gaps.':'Check additional universities / institutes and subject balance; no claim of national completeness.';
  return {country,region,status,gap,records:records.length,before:before.filter(r=>canonicalCountry(r.country)===country).length,publicEmails:records.filter(r=>r.email).length,publishedTopics:records.filter(r=>r.interestsChecked!=='Not verified'&&!r.researchEvidence).length,groupEvidence:records.filter(r=>r.researchEvidence==='Research group membership').length,unknownTopics:records.filter(r=>r.interestsChecked==='Not verified').length,institutionLabels:institutions,rosterSources,programmeRoutes:programmes.filter(p=>p.country.split('|').map(canonicalCountry).includes(country)).length,checked:'2026-10-12'};
 });
}
