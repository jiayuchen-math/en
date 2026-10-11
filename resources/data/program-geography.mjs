const areas={
 Europe:['Austria','Belgium','Bulgaria','Croatia','Czech Republic','Denmark','Estonia','Finland','France','Germany','Greece','Hungary','Ireland','Italy','Latvia','Lithuania','Luxembourg','Netherlands','Norway','Poland','Portugal','Romania','Serbia','Slovenia','Spain','Sweden','Switzerland','UK'],
 Asia:['China','Hong Kong','India','Indonesia','Israel','Japan','Malaysia','Pakistan','Saudi Arabia','Singapore','South Korea','Taiwan','Thailand','Vietnam'],
 Americas:['Argentina','Brazil','Canada','Chile','Colombia','Mexico','Peru','US','Uruguay'],
 Africa:['Egypt','Ghana','Kenya','Morocco','Nigeria','Rwanda','Senegal','South Africa'],
 Oceania:['Australia','New Zealand']
};
export function withGeography(programme){
 const multi=programme.country==='Joint Europe';
 const algant=multi&&/ALGANT/i.test(programme.title);
 const intermaths=multi&&/InterMaths/i.test(programme.title);
 const countries=programme.destinationCountries||(algant?['France','Canada','Germany','Netherlands','Italy']:intermaths?['Italy','Spain','Germany','France','Austria']:[multi?'Unverified partner countries':programme.country]);
 const regions=[...new Set(countries.map(c=>Object.entries(areas).find(([,members])=>members.includes(c))?.[0]||(multi?'Europe':'Geography not classified')))];
 const sources=algant?[...programme.sources,{url:'https://algant.eu/pages/consortium/',label:'Official consortium: participating countries (mobility choices depend on the intake)'}]:intermaths?[...programme.sources,{url:'https://www.intermaths.eu/erasmus-mundus/consortium',label:'Official full partners: Italy, Spain, Germany, France and Austria (not every associated partner is a degree destination)'}]:programme.sources;
 return {...programme,region:regions.join('|'),country:countries.join('|'),programmeForm:multi?'Multi-country joint programme':programme.programmeForm||(programme.institution==='Stockholm University / KTH'?'Inter-institutional (single-country)':'Single-country pathway'),sources};
}
