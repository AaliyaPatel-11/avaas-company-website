/**
 * ============================================================================
 * AVAAS — Corporate Identity & Legal Registry
 * ============================================================================
 * Primary source of truth: AVAAS Company Letterhead & Incorporation Registry.
 * Edit this file to update corporate details, registered address, CIN, or motto.
 */

export interface CompanyInfo {
  legalName: string;
  tradeName: string;
  cin: string;
  motto: string;
  tagline: string;
  positioning: string;
  contact: {
    email: string;
    phone: string;
    displayPhone: string;
    website: string;
    displayWebsite: string;
    location: string;
  };
  registeredOffice: {
    line1: string;
    line2: string;
    area: string;
    cityState: string;
    country: string;
    fullFormatted: string;
  };
}

export const companyInfo: CompanyInfo = {
  legalName: "AVAAS SPEECH SYSTEMS PRIVATE LIMITED",
  tradeName: "AVAAS",
  cin: "U62099TS2026PTC223870",
  motto: "Connecting the world through voice.",
  tagline: "Your voice • Your ride • Anywhere • Anytime",
  positioning: "Building the future of voice-first mobility",
  contact: {
    email: "avaas.pvt@gmail.com",
    phone: "+916303850467",
    displayPhone: "+91 63038 50467",
    website: "https://info.avaas.me",
    displayWebsite: "info.avaas.me",
    location: "Hyderabad, Telangana, India",
  },
  registeredOffice: {
    line1: "No. 503, Jabburam Apartments",
    line2: "H.No. 20-22/2, Malkajgiri, Rangareddy",
    area: "Hyderabad – 500047",
    cityState: "Telangana",
    country: "India",
    fullFormatted:
      "No. 503, Jabburam Apartments, H.No. 20-22/2, Malkajgiri, Rangareddy, Hyderabad – 500047, Telangana, India",
  },
};
