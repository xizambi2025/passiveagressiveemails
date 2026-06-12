export interface Scenario {
  id: string;
  recipient: string;
  situation: string;
  category: string;
  tone: number;
  length: 'short' | 'medium' | 'long';
  subject: string;
  body: string;
  aggressionScore: number;
  damageAssessment: string;
  corporateTranslation: {
    whatYouMean: string;
    corporateVersion: string;
  };
  tags: string[];
}
