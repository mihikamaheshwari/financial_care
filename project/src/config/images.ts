// Image configuration file
// Add your image paths here after placing images in the public/images folder

export const images = {
  // Hero section images
  hero: {
    banner: '/images/hero/hero-banner.jpg',
    background: '/images/hero/hero-bg.jpg'
  },
  // Service section images
  services: {
    financialAdvisory: '/images/services/financial-advisory.jpg',
    wealthManagement: '/images/services/wealth-management.jpg',
    mutualFunds: '/images/services/mutual-funds.jpg',
    pms: '/images/services/pms.jpg',
    sifAif: '/images/services/sif-aif.jpg',
    taxPlanning: '/images/services/tax-planning.jpg',
    homeLoan: '/images/services/home-loan.jpg',
    businessLoan: '/images/services/business-loan.jpg'
  },

  // About section images
  about: {
    teamMeeting: '/images/about/team-meeting.jpg',
    office: '/images/about/office.jpg',
    consultation: '/images/about/consultation.jpg'
  },
  // Team member images
  team: {
    member1: '/images/services/team/team-member-1.jpg',
    member2: '/images/team/team-member-2.jpg',
    member3: '/images/team/team-member-3.jpg'
  },
  // Placeholder/fallback images
  placeholder: {
    service: '/images/placeholder-service.svg',
    team: '/images/placeholder-team.svg',
    hero: '/images/placeholder-hero.svg'
  }
};

// Image alt texts for accessibility
export const imageAlts = {
  hero: {
    banner: 'Financial Care - Professional Financial Services',
    background: 'Modern office background'
  },  services: {
    financialAdvisory: 'Financial advisory consultation services',
    wealthManagement: 'Wealth management and planning',
    mutualFunds: 'Mutual funds investment advisory',
    pms: 'Portfolio Management Services',
    sifAif: 'Social Impact Fund and Alternative Investment Fund',
    taxPlanning: 'Tax planning and optimization services',
    homeLoan: 'Home loan assistance and consultation',
    businessLoan: 'Business loan and financing solutions'
  },
  about: {
    teamMeeting: 'Professional team meeting',
    office: 'Modern financial office',
    consultation: 'Client consultation session'
  },  team: {
    member1: 'CA Lalit Kabra - Director, Financial Care',
    member2: 'Team member - Tax Specialist',
    member3: 'Team member - Business Consultant'
  }
};
