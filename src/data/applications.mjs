// The three groups this dealership serves. Each becomes a page under
// /applications/ and a row on the home page.

export const applications = [
  {
    slug: 'powersports',
    name: 'Powersports',
    title: 'Synthetic oil for powersports: dirt bikes, ATVs, UTVs and street bikes',
    description:
      'Oil advice for motocross bikes, ATVs, UTVs and street bikes from an independent AMSOIL Dealer in Eugene, Oregon who races and wrenches.',
    machines: 'Motocross and trail bikes, ATVs, UTVs, street bikes, drag cars',
    summary:
      'High RPM, high heat, and a clutch that shares the oil. When money and reputation ride on the machine, the oil has to hold its grade to the last lap.',
    lede: 'Performance engines ask more of their oil than anything else on the road or the trail. They rev higher, run hotter, and in most bikes the same oil has to protect the engine, the gearbox and the clutch at once.',
    conditions: [
      {
        term: 'Sustained high RPM',
        detail:
          'Gears and high-speed bearings shear oil, which thins it out. An oil that starts as a 40 weight needs to still be a 40 weight at the end of the moto.',
      },
      {
        term: 'Heat',
        detail:
          'Air-cooled and hard-ridden engines run oil temperatures that break down weaker oils and leave deposits on pistons and rings.',
      },
      {
        term: 'Shared sumps and wet clutches',
        detail:
          'Most motorcycles and many ATVs run the clutch in engine oil. The oil needs the right friction characteristics or the clutch slips.',
      },
      {
        term: 'Dust, mud and water',
        detail:
          'Off-road machines breathe dirt and get hosed off afterward. Contamination, not mileage, often decides when the oil is done.',
      },
    ],
    questions: [
      {
        q: 'Can I run car oil in my dirt bike or ATV?',
        a: 'If the machine has a wet clutch, use an oil that meets the JASO MA or MA2 standard your manual calls for. Many passenger car oils contain friction modifiers that can make a wet clutch slip.',
        note: 'wet-clutch-motorcycle-oil',
      },
      {
        q: 'How often should a race bike get fresh oil?',
        a: 'Follow the hours in your service manual as the baseline. Race engines hold very little oil and work it hard, so intervals are short and counted in hours, not miles. Tell me how you ride and I will tell you how I would service it.',
      },
      {
        q: 'Do shops in Eugene stock AMSOIL for customers?',
        a: 'Shops can set up a retail or commercial account through an independent dealer. I can help a powersports shop that wants a premium line on the shelf get that set up, and be the local person to call with product questions.',
      },
    ],
  },
  {
    slug: 'heavy-equipment',
    name: 'Heavy equipment',
    title: 'Synthetic lubricants for heavy equipment and construction fleets',
    description:
      'Lubricant guidance for excavators, dozers, loaders and diesel fleets from an independent AMSOIL Dealer in Eugene, Oregon with over a decade running heavy equipment.',
    machines: 'Excavators, dozers, loaders, diesel trucks, hydraulic systems, gearboxes',
    summary:
      'A machine that is down earns nothing. Longer service intervals and fewer lubricant-related failures are worth more than the price on the pail.',
    lede: 'Heavy equipment has a service life, and the owner has already paid for all of it. Whether the machine reaches the end of that life depends heavily on what goes into the engine, the hydraulics and the final drives, and on how often.',
    conditions: [
      {
        term: 'Long hours under load',
        detail:
          'Diesel engines in equipment spend their lives working, not cruising. Soot, heat and load use up an oil’s additives hour by hour.',
      },
      {
        term: 'Hydraulic heat and pressure',
        detail:
          'Hydraulic oil is a working part of the machine. Oil that thins out or foams costs you speed and precision before it costs you a pump.',
      },
      {
        term: 'Cold starts, hot afternoons',
        detail:
          'A machine in the Cascades can start below freezing and work hot by noon. The oil has to flow at the first and protect at the second.',
      },
      {
        term: 'Downtime',
        detail:
          'Every service is hours the machine is parked. Stretching the interval safely is where a premium lubricant pays for itself.',
      },
    ],
    questions: [
      {
        q: 'Is synthetic oil worth it for heavy equipment?',
        a: 'It can be, when it lets you run longer between services without giving up protection. The right way to judge it is cost per operating hour, including labor and downtime, not price per gallon.',
        note: 'is-synthetic-oil-worth-the-cost',
      },
      {
        q: 'How do I know a longer drain interval is safe?',
        a: 'Oil analysis. A lab report on a used oil sample shows wear metals, contamination and how much life the oil has left, so the interval is set by evidence from your own machine.',
        note: 'what-is-oil-analysis',
      },
      {
        q: 'Can one dealer cover engine oil, hydraulic oil, gear lube and grease?',
        a: 'Yes. AMSOIL makes diesel engine oils, hydraulic oils, gear lubes and greases, and I can help match each one to the specification in your equipment manual.',
      },
    ],
  },
  {
    slug: 'small-engine-shops',
    name: 'Small engine shops',
    title: 'Synthetic oil for small engines and the shops that service them',
    description:
      'Help for small engine repair and sales shops, landscapers and equipment owners from an independent AMSOIL Dealer in Eugene, Oregon.',
    machines: 'Mowers, trimmers, saws, generators, pressure washers, outboards',
    summary:
      'Air-cooled engines run hot with very little oil. Shops that sell premium machines want a premium oil on the shelf and a real person behind it.',
    lede: 'Small engines are simple, and that is exactly why oil matters so much in them. Most are air-cooled, many have no oil filter, and a commercial mower can run wide open for eight hours a day on less than two quarts.',
    conditions: [
      {
        term: 'Air cooling',
        detail:
          'With no radiator, the oil carries much of the heat. Oil temperatures run well above what a car engine sees.',
      },
      {
        term: 'Small sumps, no filter',
        detail:
          'A quart or two of oil does all the work, and in many engines nothing filters it. Whatever gets in stays in until the next change.',
      },
      {
        term: 'Two-stroke fuel mix',
        detail:
          'Saws and trimmers burn their oil with the fuel. The oil has to protect at lean mix ratios and burn clean enough to keep ports and screens open.',
      },
      {
        term: 'Storage',
        detail:
          'Seasonal equipment sits for months. Old fuel and moisture cause more spring no-starts than wear does.',
      },
    ],
    questions: [
      {
        q: 'What oil should a small four-stroke engine use?',
        a: 'Start with the viscosity grade in the engine manual, commonly SAE 30 or 10W-30. A synthetic oil made for small engines handles the heat of air cooling better than an oil designed for water-cooled cars.',
        note: 'what-oil-viscosity-numbers-mean',
      },
      {
        q: 'Why would a repair shop carry a premium oil?',
        a: 'The customer who buys a premium machine is the same customer who wants to take care of it. A premium oil on the counter gives that customer something better to buy and gives the shop another reason to be the place they come back to.',
      },
      {
        q: 'Do you help with marine engines too?',
        a: 'Yes. I am certified in marine engines. Outboards and inboards have their own oil standards, and I can help you match the right one to the engine.',
      },
    ],
  },
];
