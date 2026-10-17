// Translate the existing page instead of adding a companion essay.
import {subjectTranslations} from './subject-translations.mjs';
export function chineseCompanion(){return ''}
export const localizedSubjects=Object.keys(subjectTranslations);
export const chineseSubjectMetadata=Object.fromEntries(Object.entries(subjectTranslations).map(([id,e])=>[id,{title:e.title,summary:e.opening}]));
