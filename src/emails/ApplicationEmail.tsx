import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

interface ApplicationEmailProps {
  founderName: string;
  email: string;
  startupName: string;
  website?: string;
  stage: string;
  industry: string;
  location: string;
  teamSize: string;
  pitch: string;
  support?: string;
}

export default function ApplicationEmail({
  founderName,
  email,
  startupName,
  website,
  stage,
  industry,
  location,
  teamSize,
  pitch,
  support,
}: ApplicationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Accelerator Application from {startupName}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://sbv.one/sbv_logo_inverted.png"
              width="92"
              height="40"
              alt="SBV Logo"
              style={logoImg}
            />
            <Text style={logoText}>StartingBlock</Text>
            <Text style={tagline}>VENTURES</Text>
          </Section>

          <Hr style={divider} />

          {/* Title */}
          <Section style={content}>
            <Heading style={title}>New Accelerator Application</Heading>
            <Text style={subtitle}>
              A new startup has applied to the SBV Accelerator program.
            </Text>
          </Section>

          {/* Founder Info */}
          <Section style={infoSection}>
            <Text style={sectionTitle}>Founder Information</Text>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Name</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{founderName}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Email</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{email}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={lightDivider} />

          {/* Startup Info */}
          <Section style={infoSection}>
            <Text style={sectionTitle}>Startup Details</Text>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Startup Name</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{startupName}</Text>
              </Column>
            </Row>
            {website && (
              <Row>
                <Column style={labelColumn}>
                  <Text style={label}>Website</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{website}</Text>
                </Column>
              </Row>
            )}
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Stage</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{formatStage(stage)}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Industry</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{formatIndustry(industry)}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Location</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{location}</Text>
              </Column>
            </Row>
            <Row>
              <Column style={labelColumn}>
                <Text style={label}>Team Size</Text>
              </Column>
              <Column style={valueColumn}>
                <Text style={value}>{formatTeamSize(teamSize)}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={lightDivider} />

          {/* Pitch */}
          <Section style={infoSection}>
            <Text style={sectionTitle}>About the Startup</Text>
            <Text style={pitchText}>{pitch}</Text>
          </Section>

          {/* Support Needed */}
          {support && (
            <>
              <Hr style={lightDivider} />
              <Section style={infoSection}>
                <Text style={sectionTitle}>Support Needed</Text>
                <Text style={pitchText}>{support}</Text>
              </Section>
            </>
          )}

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This application was submitted through the SBV website.
            </Text>
            <Text style={footerText}>
              Reply directly to this email to contact {founderName}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Helper functions
function formatStage(stage: string): string {
  const stages: Record<string, string> = {
    idea: "Idea / Concept",
    mvp: "MVP / Prototype",
    "pre-seed": "Pre-seed",
    seed: "Seed",
    "series-a": "Series A",
  };
  return stages[stage] || stage;
}

function formatIndustry(industry: string): string {
  const industries: Record<string, string> = {
    fintech: "Fintech",
    healthtech: "Healthtech",
    ai: "AI / ML",
    saas: "SaaS",
    climatetech: "Climatetech",
    consumer: "Consumer",
    web3: "Web3",
    enterprise: "Enterprise",
    other: "Other",
  };
  return industries[industry] || industry;
}

function formatTeamSize(size: string): string {
  const sizes: Record<string, string> = {
    "1": "Solo founder",
    "2-5": "2-5 people",
    "6-10": "6-10 people",
    "11-25": "11-25 people",
    "25+": "25+ people",
  };
  return sizes[size] || size;
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  padding: "32px 40px 24px",
  textAlign: "center" as const,
};

const logoImg = {
  margin: "0 auto 8px",
};

const logoText = {
  fontSize: "18px",
  fontWeight: "500",
  letterSpacing: "-0.02em",
  color: "#1a1a1a",
  margin: "0",
  lineHeight: "1",
};

const tagline = {
  fontSize: "9px",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#6b7280",
  margin: "2px 0 0",
  fontWeight: "300",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "0",
};

const lightDivider = {
  borderColor: "#f3f4f6",
  margin: "16px 40px",
};

const content = {
  padding: "32px 40px 24px",
};

const title = {
  fontSize: "24px",
  fontWeight: "500",
  color: "#1a1a1a",
  margin: "0 0 8px",
};

const subtitle = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.5",
};

const infoSection = {
  padding: "0 40px",
};

const sectionTitle = {
  fontSize: "12px",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#9ca3af",
  margin: "0 0 16px",
  fontWeight: "500",
};

const labelColumn = {
  width: "140px",
  verticalAlign: "top" as const,
};

const valueColumn = {
  verticalAlign: "top" as const,
};

const label = {
  fontSize: "13px",
  color: "#6b7280",
  margin: "0 0 12px",
};

const value = {
  fontSize: "14px",
  color: "#1a1a1a",
  margin: "0 0 12px",
  fontWeight: "500",
};

const pitchText = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  padding: "24px 40px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0 0 4px",
};
