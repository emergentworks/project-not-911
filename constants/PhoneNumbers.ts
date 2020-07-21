type Props = {
  [key: string]: {
    crisis?: true,
    display: string,
    hours?: string,
    tags?: string[],
    text?: string,
    tel: string,
    website?: string,
  }[];
};

export const PhoneNumbers: Props = {
  violence: [{
    display: 'NYC 24hr Domestic Violence Hotline',
    tel: '1-800-621–4673',
  }, {
    display: 'New York State Domestic and Sexual Violence Hotline',
    tel: '1-800-942-6906',
  }, {
    display: 'Safe Horizons Citywide Helpline',
    tel: '1-855-234-1042',
  }, {
    display: 'NYC Gay and Lesbian Anti-Violence Project',
    tel: '212-714-1141',
  }],

  hatecrimes: [{
    display: "NYC Well",
    tel: "1-888-692-9355",
  }, {
    display: "NYC Mental Health Crisis Hotline",
    tel: "1-800-854-7771",
  }],

  mentalhealth: [{
    crisis: true,
    display: "NYC Well",
    hours: '24hr access',
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
    hours: 'M-F 9am-5pm',
    tags: ['Anxiety', 'Counseling', 'COVID-19'],
    tel: '1-844-863-9314',
  }, {
    display: 'SAMHSA Disaster Distress National Helpline',
    hours: '24hr access',
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
    tel: "718-557-1399",
  }, {
    display: "If you are affected by Covid-19 and are facing threat of eviction or homelessness, call this HPA hotline",
    tel: "718-557-1379",
  }, {
    display: "Safe Horizons Youth Homelessness Hotline",
    tel: "1-800-708-6600",
  }, {
    display: "311: Specifically ask for non-emergency dispatch with no police",
    tel: "311",
  }],

  noise: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
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
  }, {
    display: 'Safe Horizon Crime Victim 24hr hotline',
    tel: '1-866-689-4357',
  }],

  poison: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
  bipoc: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
  lgbtqia: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
  immigrant: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
  substanceabuse: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
  homeless: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
  elderly: [{
    display: "Just call 311, or text HELP to 311-692",
    tel: "311",
  }],
};
