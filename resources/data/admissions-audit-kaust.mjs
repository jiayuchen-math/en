// Current admissions subsite supersedes older central English-score guidance.
const checked='2026-10-13';
const funding='https://admissions.kaust.edu.sa/fees-funding';
const selection='https://admissions.kaust.edu.sa/how-to-apply/entry-requirements';
const dates='https://admissions.kaust.edu.sa/how-to-apply/admission-timelines';
const records={};
for(const degree of ['master','doctorate']){
 const phd=degree==='doctorate';
 const id=`kaust-${degree}-applied-mathematics-and-computational-science`;
 const facts={
  tuition:['Eligible fellowship recipients receive tuition/bench coverage valued up to USD 35,000 annually, not a cash tuition payment. External sponsorship can exclude eligibility; offer terms govern.',funding],
  fundingDetail:[`Annual stipend: ${phd?'USD 25,000–30,000, qualification/progress-dependent':'USD 20,000'}. Base housing and eligible on-campus health insurance included; upgrades cost extra. Relocation covers arrival and post-graduation return only. External funding can affect eligibility; confirm the offer.`,funding],
  selection:[`Relevant ${phd?'academic master’s':'bachelor’s'}, GPA ≥3.0/4, three referees (normally due within seven days after the deadline). IELTS 7/6.5 each; new-scale TOEFL 5/4.5 each; PTE 71/67; Cambridge 185/176. Specified in-person degrees qualify for exemption; overseas branches/MOI letters do not. GRE/PGAT optional. ${phd?'PhD applicants':'Saudi nationals'} can qualify for conditional AELC admission; see the lower-score table. Current requirements supersede older IELTS 6.5/TOEFL 81 guidance.`,selection],
  cycle:[`Fall 2027 round 2: opens 28 September 2026, closes 3 January 2027; semester begins 29 August 2027. The timetable is tentative. ${phd?'Spring 2027 is PhD-only; its 27 September 2026 round-1 deadline has passed.':'Spring 2027 does not admit MS students.'}`,dates]
 };
 records[id]={fees:'Tuition coverage subject to fellowship eligibility',funding:'Fellowship subject to eligibility / offer terms',intakeYear:'Fall 2027',checked,
  ...Object.fromEntries(Object.entries(facts).map(([f,[text]])=>[f,text])),
  evidence:Object.entries(facts).map(([field,[text,url]])=>({field,text,url,checked})),
  sources:[funding,selection,dates].map(url=>({url,label:'Current official KAUST admissions guidance'})),
  applicationDates:[{type:'Admission',date:'2026-09-28',label:'Fall 2027 round 2 opens; tentative schedule',source:dates},{type:'Admission',date:'2027-01-03',label:'Fall 2027 round 2 deadline; hour unstated, tentative',source:dates}],
  applicationWindow:{intake:'Fall 2027',opensAt:'2026-09-28T00:00:00Z',closesAt:'2027-01-03T00:00:00Z',openingDate:'2026-09-28',deadlineDate:'2027-01-03',deadlinePrecision:'date',timeZone:'Asia/Riyadh',openingLabel:'September 28, 2026; hour unstated',deadlineLabel:'January 3, 2027; hour unstated',source:dates,reviewed:checked,note:'Timestamps are date-only markers, not published opening/closing hours. Official dates are tentative; verify the portal. This is not a live portal check.'},
  audit:{checked,fields:Object.fromEntries(Object.entries(facts).map(([f,[,source]])=>[f,{status:'Verified',source,year:f==='cycle'?'2027':'Current published rule',checked,note:'Applies to the stated rule, not guaranteed funding or admission.'}]))}
 };
}
export default records;
