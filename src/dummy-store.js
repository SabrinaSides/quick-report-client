import uuid from 'react-uuid'

const reports = [
    {
      pt_id: uuid(),
      room_number: '502',
      pt_initials: 'PH',
      admit_date: '6/3/2021',
      date_report_created: '6/2/2021',
      diagnosis: 'GI bleed',
      allergies: 'statins',
      code_status: 'full',
      A_O: 'x3',
      pupils: 'PERRLA',
      other_neuro: 'tremors',
      heart_rhythm: 'SR 70s',
      BP: '130/80s',
      edema: 'none',
      other_cardiac: 'frequent PVCs',
      lung_sounds: 'clear',
      oxygen: '3L NC',
      other_resp: 'yellow sputum',
      last_bm: '6/1/2021',
      N_V: 'no',
      gu: 'voids',
      other_gi_gu: 'n/a',
      skin: 'n/a',
      IV_access: 'RUE PICC',
      additional_report: 'abnormally high K level- 5.4',
      user_id: 1
    },
    {
      pt_id: uuid(),
      room_number: '822',
      pt_initials: 'VN',
      admit_date: '6/2/2021',
      date_report_created: '6/5/2021',
      diagnosis: 'MI',
      allergies: 'statins',
      code_status: 'full',
      A_O: 'x2',
      pupils: 'PERRLA',
      other_neuro: 'n/a',
      heart_rhythm: 'SR 70s',
      BP: '130/80s',
      edema: 'generalized trace',
      other_cardiac: 'MD wants TED hose on legs',
      lung_sounds: 'bilat lower lobes coarse',
      oxygen: '2L NC with bipap at night',
      other_resp: 'tries to remove O2',
      last_bm: '6/1/2021',
      N_V: 'yes',
      gu: 'straight cath',
      other_gi_gu: 'wears brief d/t urgency',
      skin: 'stage 1 coccyx',
      IV_access: 'left FA PIV',
      additional_report: 'daughter staying with pt',
      user_id: 1
    },
    {
      pt_id: uuid(),
      room_number: '755',
      pt_initials: 'BR',
      admit_date: '6/5/2021',
      date_report_created: '6/1/2021',
      diagnosis: 'drug overdose',
      allergies: 'statins',
      code_status: 'full',
      A_O: 'x1',
      pupils: 'PERLLA',
      other_neuro: 'n/a',
      heart_rhythm: 'SR 70s',
      BP: '130/80s',
      edema: 'none',
      other_cardiac: 'frequent PVCs',
      lung_sounds: 'expiratory wheeze',
      oxygen: '2L NC with bipap at night',
      other_resp: 'n/a',
      last_bm: '6/2/2021',
      N_V: 'no',
      gu: 'incontinent',
      other_gi_gu: 'n/a',
      skin: 'scattered bruising-abdomen',
      IV_access: 'right AC PIV',
      additional_report: 'wound needs dressing change',
      user_id: 1
    },
    {
      pt_id: uuid(),
      room_number: '527',
      pt_initials: 'ID',
      admit_date: '6/1/2021',
      date_report_created: '6/6/2021',
      diagnosis: 'drug overdose',
      allergies: 'statins',
      code_status: 'full',
      A_O: 'x1',
      pupils: 'fixed',
      other_neuro: 'n/a',
      heart_rhythm: 'SB 40s',
      BP: '80/40s',
      edema: 'none',
      other_cardiac: 'MD wants TED hose on legs',
      lung_sounds: 'clear',
      oxygen: 'RA',
      other_resp: 'n/a',
      last_bm: '6/3/2021',
      N_V: 'yes',
      gu: 'straight cath',
      other_gi_gu: 'wears brief d/t urgency',
      skin: 'n/a',
      IV_access: 'left FA PIV',
      additional_report: 'daughter staying with pt',
      user_id: 1
    },
  ];

export default reports;
