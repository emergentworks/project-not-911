type Props = {
  [key: string]: {
    crisis?: true,
    display: string,
    hours?: string,
    is24Hr?: true,
    tags?: string[],
    tel?: string,
    text?: { content?: string; number: string; },
    website?: string,
    voicemail?: true,
  }[];
};

export const PhoneNumbers: Props = {
  violence: [{
    crisis: true,
    display: 'Safe Horizons 24hr Domestic Violence Hotline',
    tags: [
      'Domestic Violence',
      'Temporary Housing',
      'Emergency Shelter',
      'Counseling',
      'Multilingual',
    ],
    tel: '1-800-621-4673',
    hours: '24 Hour Access',
  }, {
    display: 'Safe Horizons Citywide General Helpline',
    hours: 'Mon-Fri. 9AM - 5PM',
    tags: ['Accepts Voicemail', 'Multilingual', 'Lock Changes'],
    tel: '1-855-234-1042',
  }, {
    display: 'Safe Horizons Rape & Sexual Assault Victims Hotline',
    hours: '24 Hour Access',
    tags: ['Crisis counseling', 'Safety planning', 'General Information', 'Multilingual'],
    tel: '1-855-234-1042',
    website: 'https://www.safehorizon.org/get-help/rape-and-sexual-assault',
  }, {
    crisis: true,
    display: 'NYC Gay and Lesbian Anti-Violence Project',
    tel: '212-714-1141',
    hours: '24 Hour Access',
  }, {
    crisis: true,
    display: 'Violence Intervention Program',
    tel: '1-800-664-5880',
    hours: '24 Hour Access',
  }, {
    crisis: true,
    display: 'National Domestic Violence Hotline',
    tel: '1-800-799-7233',
    text: { content: 'LOVEIS', number: '1-866-331-9474' },
    hours: '24 Hour Access',
  }],

  mentalhealth: [{
    crisis: true,
    display: 'NYC Well',
    hours: '24 Hour Access',
    tags: [
      'Mobile Mental Health Crisis Team can respond within 48 hours',
      '711 (TTY for hearing impaired)',
      'Spanish, Mandarin and Cantonese Available',
      'Anxiety',
      'Counseling',
      'Follow-up service',
      'Mental Health Crisis',
      'Suicide Prevention',
      'Addiction',
      'Outpatient Detox',
    ],
    tel: '1-888-692-9355',
    text: { content: 'WELL', number: '65173' },
  }, {
    display: 'NY State Emotional Support Helpline',
    tags: ['Anxiety', 'Counseling', 'COVID-19'],
    tel: '1-844-863-9314',
  },
  // {
  //   display: 'NYS/Crisis Text Line Partnership',
  //   hours: '24 Hour Access',
  //   tags: ['Crisis', 'Counseling', 'COVID-19'],
  //   text: { content: 'GOT5', number: '741741' },
  // },
  {
    display: 'SAMHSA Disaster Distress National Helpline',
    hours: '24 Hour Access',
    tags: ['Post-Disaster', 'Crisis', 'Emotional Distress', 'Trauma', 'COVID-19', 'Unrest', 'Spanish'],
    tel: '1-800-985-5990',
    text: {content: 'TalkWithUs or Hablanos', number: '66746'},
    website: 'https://www.samhsa.gov/find-help/disaster-distress-helpline',
  }],

  immigration: [{
    display: 'ActionNYC Free Immigration Issues Hotline',
    tel: '1-800-354-0365',
  }],

  homelessness: [{
    display: 'Homelessness Prevention Administration Hotline',
    tags: ['Eviction prevention', 'Legal Assistance', 'Cash Assistance'],
    tel: '718-557-1399',
    website: 'https://www1.nyc.gov/site/hra/help/homelessness-prevention.page',
  }, {
    display: "NYC Human Resources Administration's (HRA) Office of Civil Justice",
    tags: ['Eviction prevention', 'Legal Assistance'],
    tel: '718-557-1379',
    website: 'https://www1.nyc.gov/site/hra/help/legal-services-for-tenants.page',
  }, {
    hours: '24 Hour Access',
    display: '311 (Ask for Tenant Helpline)',
    tags: ['Eviction prevention', 'Legal Assistance'],
    tel: '311',
  }, {
    display: 'Safe Horizons Streetwork Project Youth Homelessness Hotline',
    hours: 'Mon, Tues, Thurs, Fri, 10AM–5PM',
    tel: '1-800-708-6600',
    tags: ['Overnight shelter', 'Up to age 25', ''],
    website: 'https://www.safehorizon.org/get-help/homeless-youth/',
  }, {
    display: '311 (Ask for homeless street outreach team)',
    hours: '24 Hour Access',
    tags: [
      'Request street outreach team',
      'Homeless Outreach team can respond within 1 hour',
    ],
    tel: '311',
    website: 'https://www1.nyc.gov/site/dhs/outreach/street-outreach.page',
  }, {
    display: 'The Door Runaway and Homeless Youth Services',
    tags: [
      'Use extension 3377 for homeless youth services',
      'General Information',
      'Counseling',
      'Shelter referrals',
    ],
    tel: '212-941-9090',
    website: 'https://door.org/programs-services/runaway-homeless-youth/',
  }],

  legal: [{
    display: 'National Lawyer Guild Arrest Support Hotline',
    tags: [
      'Legal Support',
      'Arrested at Political Demonstration',
      'Witnessed an arrest',
    ],
    tel: '212-679-6018',
    website: 'https://nlgnyc.org/',
  },
  // {
  //   display: 'National Lawyer Guild Case Support Hotline',
  //   tags: ['False arrest', 'Assault by NYPD'],
  //   tel: '347-752-8070',
  // },
  {
    display: 'Safe Horizon Crime Victim 24hr hotline',
    hours: '24 Hour Access',
    tags: ['Counseling', 'Assault by NYPD'],
    tel: '1-866-689-4357',
  }],

  poison: [{
    hours: '24 Hour Access',
    display: 'NYC Poison Control Center',
    tags: [
      'Treatment Advice',
      'General Information',
      'Supports 150 languages',
      'Registered Nurses & Pharmacists',
    ],
    tel: '212-764-7667',
  }, {
    hours: '24 Hour Access',
    display: 'SAMHSA (Substance Abuse and Mental Health Services Administration) National Helpline',
    tags: [
      'Local Referrals',
      'Spanish Available',
      'General Information',
    ],
    tel: '1-800-662-4357',
  }, {
    crisis: true,
    display: 'NYC Well',
    hours: '24 Hour Access',
    tags: [
      'Mobile Mental Health Crisis Team can respond within 48 hours',
      '711 (TTY for hearing impaired)',
      'Spanish, Mandarin and Cantonese Available',
      'Anxiety',
      'Counseling',
      'Follow-up service',
      'Mental Health Crisis',
      'Suicide Prevention',
      'Addiction',
      'Outpatient Detox',
    ],
    tel: '1-888-692-9355',
    text: {content: 'WELL', number: '65173'},
  }, {
    display: 'New York State Office of Addiction Services and Supports HOPEline',
    hours: '24 Hour Access',
    tags: [
      'Substance Abuse',
      'Gambling Addiction',
      'General Information',
      'Referrals',
      'Multilingual support',
    ],
    tel: '1-877-846-7369',
    text: {number: 'HOPENY'},
  }],
};
