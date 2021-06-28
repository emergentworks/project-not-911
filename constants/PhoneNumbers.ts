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
    description?: string,
    borough?: string,
    note?: string,
    location?: string[],
    nationwide?: boolean,
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
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
  }, {
    display: 'Safe Horizons Citywide General Helpline',
    hours: 'Mon-Fri. 9AM - 5PM',
    tags: ['Accepts Voicemail', 'Multilingual', 'Lock Changes'],
    tel: '1-855-234-1042',
    location: [
      'New York City',
    ],
  }, {
    display: 'Safe Horizons Rape & Sexual Assault Victims Hotline',
    hours: '24 Hour Access',
    tags: ['Crisis counseling', 'Safety planning', 'General Information', 'Multilingual'],
    tel: '1-855-234-1042',
    website: 'https://www.safehorizon.org/get-help/rape-and-sexual-assault',
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
  }, {
    crisis: true,
    display: 'NYC Gay and Lesbian Anti-Violence Project',
    tel: '212-714-1141',
    hours: '24 Hour Access',
    location: [
      'New York City',
    ],
  }, {
    crisis: true,
    display: 'Violence Intervention Program',
    tel: '1-800-664-5880',
    hours: '24 Hour Access',
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
  }, {
      display: "Barrier Free Living",
      description: "Outside of these hours call the National Domestic Violence Hotline", 
      tel: "1 (800) 799-7233",
      website: "https://www.bflnyc.org/",
      location: [
        'New York City', 
      ], 
    },
    {
    crisis: true,
    display: 'National Domestic Violence Hotline',
    tel: '1-800-799-7233',
    text: { content: 'LOVEIS', number: '1-866-331-9474' },
    hours: '24 Hour Access',
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
  },
    {
      display: 'Peer Advocate Community United Against Violence (LGBTQ+)',
      tel: '415-333-HELP (4357)',
      hours: 'Mon-Fri 10am-1pm, 2pm-6pm',
      location: [
        'San Francisco'
      ],
    },
    
  ],


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
    location: [
      'New York City',
    ],
  }, {
    display: 'NY State Emotional Support Helpline',
    tags: ['Anxiety', 'Counseling', 'COVID-19'],
    tel: '1-844-863-9314',
    location: [
      'New York City', 
    ],
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
    location: [
      'New York City', 
      'San Francisco'
    ],   
    nationwide: true,
  },
  {
    display: "The Samaritans",
    description: "24-Hour Crisis Hotline. Samaritans free, confidential, 24-hour emotional support and crisis response hotline service is available on an immediate and ongoing basis to help people who are dealing with every kind of problem, illness, trauma or loss as they try to cope with their difficulties.The hotline provides those in crisis (as well as the people who care for them) with a 24-hour safety net that can be used to fill-in service gaps, bridge between appointments and act as a source of ongoing emotional maintenance for those with chronic emotional issues.",
    tel: "(212) 673-3000",
    hours: '24 Hour Access',
    website: "https://samaritansnyc.org/24-hour-crisis-hotline/",
    location: [
      'New York City', 
    ],
  },
  {
    display: 'California State Emotional Support Helpline',
    tel: '1-855-845-7415',
    hours: '24 Hour Access',
    website: 'https://www.mentalhealthsf.org/peer-run-warmline/',
    location: [
      'San Francisco'
    ],
    },
  {
    display: 'Integrated Counseling Center Sliding Scale / Low Fee Counseling',
    tel: '415-648-2644',
    hours: 'Mon-Fri 9am-8pm',
    website: 'https://www.ciis.edu/counseling-and-acupuncture-clinics/church-street-integral-counseling-center',
    location: [
      'San Francisco'
    ],
    }

],

  immigration: [{
    display: 'ActionNYC Free Immigration Issues Hotline',
    tel: '1-800-354-0365',
    location: [
      'New York City', 
    ],
    }],

  homelessness: [{
    display: 'Homelessness Prevention Administration Hotline',
    tags: ['Eviction prevention', 'Legal Assistance', 'Cash Assistance'],
    tel: '718-557-1399',
    website: 'https://www1.nyc.gov/site/hra/help/homelessness-prevention.page',
    location: [
      'New York City', 
    ],
    }, 
    {
    display: "NYC Human Resources Administration's (HRA) Office of Civil Justice",
    tags: ['Eviction prevention', 'Legal Assistance'],
    tel: '718-557-1379',
    website: 'https://www1.nyc.gov/site/hra/help/legal-services-for-tenants.page',
    location: [
      'New York City', 
    ],  
  }, 
  {
    hours: '24 Hour Access',
    display: '311 (Ask for Tenant Helpline)',
    tags: ['Eviction prevention', 'Legal Assistance'],
    tel: '311',
    location: [
      'New York City', 
    ],
  }, {
    display: 'Safe Horizons Streetwork Project Youth Homelessness Hotline',
    hours: 'Mon, Tues, Thurs, Fri, 10AM–5PM',
    tel: '1-800-708-6600',
    tags: ['Overnight shelter', 'Up to age 25', ''],
    website: 'https://www.safehorizon.org/get-help/homeless-youth/',
    location: [
      'New York City', 
    ],
  }, 
    {
    display: '311 (Ask for homeless street outreach team)',
    hours: '24 Hour Access',
    tags: [
      'Request street outreach team',
      'Homeless Outreach team can respond within 1 hour',
    ],
    tel: '311',
    website: 'https://www1.nyc.gov/site/dhs/outreach/street-outreach.page',
    location: [
      'New York City', 
    ],
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
    location: [
      'New York City', 
    ],
  }, {
    display: "Ali Forney Center",
    is24Hr: true,
    description: "The Ali Forney Center is the largest and most comprehensive organization in the nation dedicated to housing LGBT youth. AFC serves youth aged 16-24, and provides emergency and transitional housing, street outreach, a drop-in center, medical and mental health treatment, a vocational/educational program, and a counseling project for the families of LGBT youth. ",
    borough: "Manhattan/Brooklyn",
    tel: "(212) 206-0574",
    website: "https://www.aliforneycenter.org/",
    location: [
      'New York City', 
    ],
  },
  {
    display: "Bowery Residents Committee Homeless Services Hotline",
    tel: "(212) 533-5151",
    website: "www.brc.org",
    location: [
      'New York City', 
    ],
  },
  {
    display: "Coalition for the Homeless Crisis Intervention Program",
    tel: "(212) 776-2177",
    website: "https://www.coalitionforthehomeless.org/our-programs/crisis-services/crisis-intervention/",
    note: "*Please note response may be limited due to COVID-19",
    location: [
      'New York City', 
    ],
  },
  {
    display: "Sylvia’s Place",
    description: "Sylvia’s Place is an emergency night shelter for self identified Gay, Lesbian, Bi-sexual, trans-gendered, trans-sexual and questioning youth from 16 to 23 years of age.",
    tel: "(212) 629-7440",
    location: [
      'New York City', 
    ],
  },
  {
    display: 'San Francsico Rental Assistance Program',
    tel: '415-557-6484',
    hours: '24 Hour Access',
    location: [
      'San Francisco'
    ],
  },
  {
    display: 'GLIDE',
    tel: '415-674-6000',
    hours: 'Daily Meals 8-9am, 12-1:30pm, Dinner Served M-F 4-5:30pm',
    location: [
      'San Francisco'
    ],  },
  {
    display: 'Project Homeless Connect',
    tel: '1-855-588-7968',
    hours: '24 Hour Access',
    location: [
      'San Francisco'
    ],
  },
  {
    display: 'St. Anthony Foundation',
    tel: '415-241-2600',
    hours: 'Mon-Fri 8:30am-4:30pm',
    location: [
      'San Francisco'
    ],
  },
  {
    display: 'Homeless Advocacy Project',
    tel: '1-800-405-4HAP (4427)',
    hours: 'Tue 9am-Noon, Wed 1pm-4pm, Thurs-Fri 9am-Noon & 1pm-4pm',
    location: [
      'San Francisco'
    ],
  }

],

  legal: [{
    display: 'National Lawyer Guild Arrest Support Hotline',
    tags: [
      'Legal Support',
      'Arrested at Political Demonstration',
      'Witnessed an arrest',
    ],
    tel: '212-679-6018',
    website: 'https://nlgnyc.org/',
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
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
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
  }
],

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
    location: [
      'New York City', 
    ],
  },
    {
    display: "Crisis Services for People Struggling with Addiction",
    tel: "(212) 763-0596",
    website: "https://www.projectrenewal.org/need-help",
    location: [
      'New York City', 
    ],
  }, 
  {
    hours: '24 Hour Access',
    display: 'SAMHSA (Substance Abuse and Mental Health Services Administration) National Helpline',
    tags: [
      'Local Referrals',
      'Spanish Available',
      'General Information',
    ],
    tel: '1-800-662-4357',
    location: [
      'New York City', 
      'San Francisco'
    ],
    nationwide: true,
  },
    {
      display: "Bowery Residents Committee Chemical Dependency Crisis Center (Intake Line)",
      description: "BRC’s Chemical Dependency Crisis Center (CDCC) provides 32 beds of supportive inpatient and residential substance abuse services for homeless men and women",
      tel: "(212) 533-3281",
      website: "https://www.brc.org/chemical-dependency-crisis-center",
      location: [
        'New York City', 
      ],
    },
  
  {
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
    location: [
      'New York City', 
    ],
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
    location: [
      'New York City', 
    ],
  },
  {
    display: 'San Francisco Poison Control Center',
    tel: '1-800-222-1222',
    hours: '24 Hour Access',
    location: [
      'San Francisco'
    ],  }
],
}