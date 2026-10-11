// Source-backed, deliberately incomplete rules. Never infer home fees from residence alone.
export const feeSources={
 Sweden:'https://www.universityadmissions.se/en/fees-scholarships-residence-permit/who-is-required-to-pay-fees',
 Netherlands:'https://www.duo.nl/particulier/tuition-fees.jsp',
 Oxford:'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/course-fees/fee-status'
};
export function feeAssessment(programme,b){
 const countries=String(programme.country||'').split('|');const eligibleCitizenship=['EU / EEA','Swiss'].includes(b.citizenship);
 const matchingPermit=countries.includes(b.permitCountry)&&b.permitValid==='yes';
 if(countries.includes('Sweden')&&['Masters','Undergraduate','Doctorate'].includes(programme.degree)){
  if(programme.degree==='Doctorate'||eligibleCitizenship||(matchingPermit&&['Permanent residence','Temporary residence — not for studies'].includes(b.permit)))return {state:'Potential fee exemption',text:'Based on your answers, the Swedish fee-exemption category may apply. Application/tuition fee: SEK 0 for a documented exemption, not a living-cost award. University Admissions must assess documents by its deadline. Reviewed October 11, 2026; use the rules for your actual intake.',source:feeSources.Sweden};
  return {state:'Fee status not established',text:'A Swedish study permit alone does not exempt tuition. Expired permits and extension applications have additional conditions not assessed here. A permit from another country is not a Swedish exemption. Programme tuition remains unverified; no highest international rate is imposed.',source:feeSources.Sweden};
 }
 if(countries.includes('Netherlands')&&['Masters','Undergraduate'].includes(programme.degree)){
  if((eligibleCitizenship||b.citizenship==='Surinamese')&&b.governmentFunded==='yes'&&b.previousDutchDegree==='no'&&b.feeYear==='2026-27')return {state:'Potential statutory fee category',text:'Based on your answers, statutory tuition may apply: EUR 2,694 per academic year, 2026–27 full-time government-funded study. Institution assessment required. This is historical for a 2027–28 applicant: no next-year amount is inferred. Loan and scholarship eligibility are separate.',source:feeSources.Netherlands};
  return {state:'Fee status not established',text:'Dutch statutory tuition depends on the government-funded programme, previous government-funded degree at the same level, and nationality or an eligible specific Dutch permit. A study visa or unspecified permanent residence is insufficient here. EUR 2,694/year is the verified 2026–27 statutory reference, not a confirmed 2027–28 rate. Institutional tuition has not been verified.',source:feeSources.Netherlands};
 }
 if(programme.institution==='University of Oxford'&&programme.degree==='Undergraduate')return {state:'Fee status not established',text:'Oxford assesses nationality, immigration category and residence/activity during the three years before study. A student visa, settled status alone or residence in the UK does not establish Home status here. Published 2027 annual rates: Home GBP 10,050; Overseas GBP 50,420. Both remain visible until institutional assessment; funding is separate.',source:feeSources.Oxford};
 return {state:'Fee status not established',text:'No complete fee-status rule is encoded for this programme and intake. Residence, citizenship or a visa does not automatically establish a lower rate; consult the entry’s official sources.',source:null};
}
export function backgroundAssessment(programme,b){
 const reasons=[];let state='Eligibility not established';
 const stages=programme.entryLevels||[];
 if(b.stage&&stages.length){
  const order=['Secondary','Bachelor','Master','PhD'];const current=order.indexOf(b.stage),minimum=Math.min(...stages.map(s=>order.indexOf(s)));
  if(current>=0&&current<minimum){state='Documented qualification gap';reasons.push('This route expects '+stages.join(' / ')+'-level preparation before entry. Your current stage is earlier; planned completion and equivalence still require confirmation.');}
  else{state='Potential route — confirmation needed';reasons.push('The broad education stage is compatible; mathematical prerequisites, qualification equivalence, language and selection are not certified.');}
 }
 if(programme.eligibilityRule==='KAIST-international'&&b.koreanCitizenship==='yes'){state='Documented route mismatch';reasons.push('KAIST’s international graduate route excludes Korean citizens, including dual citizens. This does not exclude a different domestic route.');}
 if(b.residence)reasons.push('Current residence: '+b.residence+'. It is not citizenship or fee status. Residence-dependent application procedures may need separate checking.');
 if(b.qualificationCountry)reasons.push('Qualification country: '+b.qualificationCountry+'. The directory does not certify equivalence; use the programme’s official qualification route.');
 if(b.languages){const listed=String(programme.language||'');reasons.push(/not verified|consult|varies|verify/i.test(listed)?'Teaching-language requirements are not fully verified.':'Compare your languages ('+b.languages+') with the stated teaching language ('+listed+'); accepted test scores/exemptions require confirmation.');}
 if(b.funding==='yes')reasons.push('Funding requested: '+programme.funding+'. Admission and awards are separate; unknown funding is not “no funding”.');
 if(b.budget)reasons.push('Budget '+b.budget+' '+(b.currency||'currency not specified')+'/year is a planning input only. Missing living-cost/fee data prevents a verified affordability comparison.');
 if(b.courses)reasons.push('Self-reported coursework: '+b.courses+'. Compare it with the entry’s preparation; this is not transcript assessment.');
 return {state,reasons,fee:feeAssessment(programme,b)};
}
