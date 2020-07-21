type Props = {
  [key: string]: {
    crisis?: true,
    display: string,
    hours?: string,
    is24Hr?: true,
    tags?: string[],
    tel?: string,
    text?: string,
    website?: string,
    voicemail?: true,
  }[];
};

export const PhoneNumbers: Props = {
  violence: [{
    crisis: true,
    display: 'NYC 24hr Domestic Violence Hotline',
    tags: [
      'Domestic Violence',
      'Temporary Housing',
      'Emergency Shelter',
      'Counseling',
    ],
    tel: '1-800-621–4673',
    is24Hr: true,
  }, {
    display: 'Safe Horizons Citywide Helpline',
    hours: 'Mon-Fri. 9 a.m.- 5 p.m.',
    tags: ['Accepts Voicemail'],
    tel: '1-855-234-1042',
  }, {
    crisis: true,
    display: 'NYC Gay and Lesbian Anti-Violence Project',
    tel: '212-714-1141',
    is24Hr: true,
  }, {
    crisis: true,
    display: 'Violence Intervention Program',
    tel: '1-800-664-5880',
    is24Hr: true,
  }, {
    crisis: true,
    display: 'National Domestic Violence Hotline',
    tel: '1-800-799-7233',
    text: 'or text LOVEIS to 1-866-331-9474',
    is24Hr: true,
  }],

  mentalhealth: [{
    crisis: true,
    display: "NYC Well",
    is24Hr: true,
    tags: [
      'Mobile Crisis Team can respond within 48 hours',
      '711 (TTY for hearing impaired)',
      'Anxiety',
      'Counseling',
      'Mental Health Crisis',
      'Suicide Prevention',
      'Addiction',
    ],
    tel: "1-888-692-9355",
    text: 'or text WELL to 65173',
  }, {
    display: 'NY State Emotional Support Helpline',
    tags: ['Anxiety', 'Counseling', 'COVID-19'],
    tel: '1-844-863-9314',
  }, {
    display: 'NYS/Crisis Text Line Partnership',
    is24Hr: true,
    tags: ['Crisis', 'Counseling', 'COVID-19'],
    text: 'Text GOT5 to 741741',
  }, {
    display: 'SAMHSA Disaster Distress National Helpline',
    is24Hr: true,
    tags: ['Post-Disaster', 'Crisis', 'Emotional Distress', 'Trauma', 'COVID-19', 'Unrest', 'Spanish'],
    tel: '1-800-985-5990',
    text: 'or text TalkWithUs or Hablanos to 66746',
    website: 'https://www.samhsa.gov/find-help/disaster-distress-helpline',
  }],

  immigration: [{
    display: "ActionNYC Free Immigration Issues Hotline",
    tel: "1-800-354-0365",
  }],

  homelessness: [{
    display: "Homelessness Prevention Administration Hotline",
    tags: ['Eviction prevention', 'Legal Assistance', 'Cash Assistance'],
    tel: "718-557-1399",
    website: 'https://www1.nyc.gov/site/hra/help/homelessness-prevention.page',
  }, {
    display: "NYC Human Resources Administration's (HRA) Office of Civil Justice",
    tags: ['Eviction prevention', 'Legal Assistance'],
    tel: "718-557-1379",
    website: 'https://www1.nyc.gov/site/hra/help/legal-services-for-tenants.page',
  }, {
    is24Hr: true,
    display: "311",
    tags: ['Ask for the "Tenant Helpline"', 'Eviction prevention', 'Legal Assistance'],
    tel: "311",
  }, {
    display: "Safe Horizons Youth Homelessness Hotline",
    hours: 'Mon., Tues., Thurs. and Fri., 10 a.m. – 5 p.m.',
    tel: "1-800-708-6600",
    website: 'https://www.safehorizon.org/get-help/homeless-youth/#signs-of-abuse/',
  }, {
    display: "311",
    is24Hr: true,
    tags: [
      'Request street outreach team',
      'Homeless Outreach team can respond within 1 hour',
    ],
    tel: "311",
    website: 'https://www1.nyc.gov/site/dhs/outreach/street-outreach.page',
  }, {
    display: 'The Door Runaway and Homeless Youth Services',
    tags: [
      'Use extension 3377 for homeless youth services',
    ],
    tel: '212-941-9090',
  }],

  noise: [{
    display: "311",
    is24Hr: true,
    tel: "311",
    text: 'or text HELP to 311-692',
  }],

  legal: [{
    display: 'National Lawyer Guild Arrest Support Hotline, if you or someone you know has been arrest',
    tel: '212-725-6422',
  }, {
    display: 'Have you been falsely arrested or assaulted by NYPD? Call the National Lawyer Guild Case Support Hotline',
    tel: '347.752.8070',
  }, {
    display: 'Safe Horizon Crime Victim 24hr hotline',
    tel: '1-866-689-4357',
  },
  ],

  poison: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
};
