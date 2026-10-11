// Date-only deadlines remain date-only; they are not invented midnight cutoffs.
// Shared by generated static badges and the client filter.
export function applicationState(data,now=Date.now()){
 if(data.rolling==='true')return 'Rolling';
 const endDate=data.deadlineDate;
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:data.timeZone||'UTC',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(now));
 if(data.openingDate&&today<data.openingDate)return 'Upcoming';
 if(data.openingDate&&today===data.openingDate)return 'Opening day — time unverified';
 if(endDate&&data.deadlinePrecision==='date'){
  if(today>endDate)return 'Closed';
  if(today===endDate)return 'Deadline day — time unverified';
 }
 const start=Date.parse(data.openFrom),end=Date.parse(data.closeBefore);
 if(endDate&&data.deadlinePrecision==='date'&&Number.isFinite(start))return now<start?'Upcoming':'Within reviewed window';
 if(!Number.isFinite(start)||!Number.isFinite(end))return 'Dates not verified';
 if(now<start)return 'Upcoming';
 if(now>=end)return 'Closed';
 return 'Within reviewed window';
}
