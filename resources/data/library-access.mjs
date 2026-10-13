// Link format and acquisition route, not a claim of an open redistribution licence.
import freeAlternatives from './library-free-alternatives.mjs';
export const accessLabels=['Direct open PDF','Open online text / archive','Institutional / purchase access','Official page — verify access'];
export function withAccess(record){
 record={...record,...(freeAlternatives[record.url]||{})};
 const access=record.access||(/\.pdf(?:$|[?#])/i.test(record.url)||/^https:\/\/arxiv\.org\/pdf\//.test(record.url)?accessLabels[0]:/^https:\/\/(?:stacks\.math\.columbia\.edu|kerodon\.net|www\.numdam\.org|homotopytypetheory\.org)\//.test(record.url)||/full (?:HTML|book|PDF|reference)|full-text link/i.test(record.label||'')?accessLabels[1]:accessLabels[3]);
 const readingAccess=record.readingAccess||([accessLabels[0],accessLabels[1]].includes(access)?'Free to read':access===accessLabels[2]?'Institutional / purchase':'Access not confirmed');
 const readingMode=record.readingMode||(/essay|popular|expository article/i.test(record.kind||'')?'Popular / exposition':record.level==='Research'||/survey|research paper/i.test(record.kind||'')?'Research / advanced':'Course / textbook');
 return {...record,access,readingAccess,readingMode,accessNote:record.accessNote||(access===accessLabels[0]?'Author, university or academic-archive PDF.':access===accessLabels[1]?'Read online at the official text or archive.':'Official access page.')};
}
