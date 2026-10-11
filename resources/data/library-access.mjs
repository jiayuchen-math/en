// Link format and acquisition route, not a claim of an open redistribution licence.
export const accessLabels=['Direct open PDF','Open online text / archive','Institutional / purchase access','Official page — verify access'];
export function withAccess(record){
 const access=record.access||(/\.pdf(?:$|[?#])/i.test(record.url)||/^https:\/\/arxiv\.org\/pdf\//.test(record.url)?accessLabels[0]:/^https:\/\/(?:stacks\.math\.columbia\.edu|kerodon\.net|www\.numdam\.org|homotopytypetheory\.org)\//.test(record.url)||/full (?:HTML|book|PDF|reference)|full-text link/i.test(record.label||'')?accessLabels[1]:accessLabels[3]);
 return {...record,access,accessNote:record.accessNote||(access===accessLabels[0]?'The linked author, university or academic-archive PDF can be opened without institutional login. Availability can change; downloading does not grant redistribution rights.':access===accessLabels[1]?'Full text is provided through the official online text or archive; a further click may be needed for a PDF.':'This link opens an official source page. Consult that page for full-text availability; no directly downloadable PDF is promised.')};
}
