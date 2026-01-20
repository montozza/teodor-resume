/**
 * Design Philosophy: Tech-Forward Minimalism with Kinetic Energy
 * - Dark navy foundation with luminous blue-cyan gradients
 * - Ultra-clean, spacious layout with strategic visual intensity
 * - Smooth animations and interactive elements
 * - Typography: Sora (display), Inter (body), JetBrains Mono (technical)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Linkedin, Download, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              TR
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm hover:text-primary transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-sm hover:text-primary transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient orb background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] opacity-40 pointer-events-none">
          <img
            src="/images/hero-gradient-orb.png"
            alt=""
            className="w-full h-full object-contain animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <p className="text-primary text-sm uppercase tracking-wider font-medium mono">
                  Digital Resume
                </p>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Teodor
                  <br />
                  <span className="text-primary">Radovic</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                  Senior SEO & AI Specialist
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                15+ years optimizing enterprise-scale websites for Fortune 500 companies. Expert in
                LLMs, generative AI search, and advanced technical SEO.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="glow-effect hover:scale-105 transition-transform"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary/10 hover:border-primary transition-all"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right: Professional Photo */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>
                {/* Photo */}
                <img
                  src="/images/teodor-1.png"
                  alt="Teodor Radovic"
                  className="relative rounded-3xl w-full h-auto shadow-2xl border border-border/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        {/* Tech pattern background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img
            src="/images/abstract-tech-pattern.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Professional <span className="text-primary">Summary</span>
            </h2>

            <Card className="glass-effect p-8 md:p-12 border-border/50">
              <p className="text-lg leading-relaxed mb-6">
                Senior SEO & AI Specialist with 15+ years optimizing enterprise-scale websites for
                Fortune 500 companies and high-growth startups. Expert in LLMs, generative AI
                search, and advanced technical SEO. Proven track record designing measurement
                frameworks for emerging digital channels and leading cross-functional teams across
                marketing, analytics, and engineering to drive measurable business outcomes.
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-border/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mono">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mono">180%</div>
                  <div className="text-sm text-muted-foreground mt-1">Traffic Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mono">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Fortune 500</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src="/images/gradient-mesh-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Core <span className="text-primary">Qualifications</span>
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              "8+ years enterprise-scale SEO & technical optimization",
              "Deep understanding of LLMs, generative AI search, and model ranking expertise",
              "Proven ability to design measurement frameworks and KPIs",
              "Expert in structured data, schema markup & entity optimization",
              "Cross-functional collaboration with marketing, analytics & engineering",
              "Strategic communication & technical storytelling",
              "MCP servers, APIs & headless CMS architecture experience",
              "Enterprise analytics: Adobe, GSC, BigQuery, Tableau",
            ].map((skill, index) => (
              <Card
                key={index}
                className="glass-effect p-6 border-border/50 hover:border-primary/50 transition-all hover:scale-105 hover:glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm leading-relaxed">{skill}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional <span className="text-primary">Experience</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Experience 1 */}
            <Card className="glass-effect p-8 border-border/50 hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Sr. Technical SEO & AI Specialist</h3>
                  <p className="text-primary font-medium mt-1">
                    Membership Marketing Partners (MMP) / NRA-ILA
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    National advocacy organization with 5M+ members
                  </p>
                </div>
                <Badge variant="outline" className="text-xs mono whitespace-nowrap">
                  Aug 2022 – Nov 2025
                </Badge>
              </div>

              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Increased organic traffic by <span className="text-primary font-semibold mono">180%</span> over 24 months by leveraging LLM-powered content optimization and entity-based semantic SEO strategies aligned with how generative AI models retrieve and rank information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Designed and implemented comprehensive measurement frameworks for emerging AI search channels using Google Search Console, GA4, and BigQuery to track generative search visibility and LLM-driven traffic sources
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Built automated keyword clustering system integrating GPT-4 API with Python, processing <span className="text-primary font-semibold mono">20,000+</span> search terms to identify semantic relationships and content opportunities, reducing manual research time by <span className="text-primary font-semibold mono">70%</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Developed strategic entity optimization framework using advanced schema markup and structured data to improve how LLMs understand and surface organizational content in AI-generated responses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Led cross-functional teams across marketing, analytics, and engineering, translating complex technical SEO requirements into strategic roadmaps and executive presentations for C-suite stakeholders
                  </span>
                </li>
              </ul>
            </Card>

            {/* Experience 2 */}
            <Card className="glass-effect p-8 border-border/50 hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Sr. Technical SEO Strategist</h3>
                  <p className="text-primary font-medium mt-1">Thales (Fortune Global 500)</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Defense and security technology company with global B2B presence
                  </p>
                </div>
                <Badge variant="outline" className="text-xs mono whitespace-nowrap">
                  Apr 2017 – Jul 2022
                </Badge>
              </div>

              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Architected enterprise-scale SEO framework in ServiceNow using custom API integrations, implementing advanced schema markup and structured data across <span className="text-primary font-semibold mono">3,000+</span> pages to optimize for semantic search and entity recognition
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Collaborated with product and engineering teams to build technical SEO solutions in headless CMS (Drupal), resolving complex backend architectural challenges for enterprise B2B requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Established comprehensive measurement framework using Adobe Analytics, Tableau, and Looker to track KPIs across multiple digital channels, creating executive dashboards for data-driven decision making
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Designed and executed A/B testing program in Conductor platform, leveraging statistical analysis and attribution modeling to optimize conversion paths, improving campaign ROI by <span className="text-primary font-semibold mono">25%</span> across verticals
                  </span>
                </li>
              </ul>
            </Card>

            {/* Experience 3 */}
            <Card className="glass-effect p-8 border-border/50 hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Local SEO Specialist & Client Facing Manager</h3>
                  <p className="text-primary font-medium mt-1">PMP - Digital Marketing Agency</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Leading agency specializing in personal injury law firms
                  </p>
                </div>
                <Badge variant="outline" className="text-xs mono whitespace-nowrap">
                  Jun 2015 – Feb 2017
                </Badge>
              </div>

              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Increased Google Maps Pack visibility by <span className="text-primary font-semibold mono">65%</span> for PI law firms through advanced local SEO strategies, implementing comprehensive schema markup and entity optimization aligned with E-E-A-T principles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Boosted local lead generation by <span className="text-primary font-semibold mono">40%</span> YoY via GMB optimization, hyper-local content strategies, and structured data implementation
                  </span>
                </li>
              </ul>
            </Card>

            {/* Experience 4 */}
            <Card className="glass-effect p-8 border-border/50 hover:border-primary/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">SEO Specialist & Technical Consultant</h3>
                  <p className="text-primary font-medium mt-1">Multiple Agencies & Platforms</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Upwork, Fantasy Agency, Hero Digital, SEO Highway, N Promote
                  </p>
                </div>
                <Badge variant="outline" className="text-xs mono whitespace-nowrap">
                  Sep 2010 – Jun 2015
                </Badge>
              </div>

              <ul className="space-y-3 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Snowflake Data Cloud: Directed large-scale website migration, managing complex redirect architecture and cross-functional stakeholder coordination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Hero Digital: Delivered enterprise SEO consulting for B2B and SaaS clients, developing data-driven strategies that improved organic visibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    Led technical SEO and link-building campaigns, expanding client portfolio and boosting ROI by <span className="text-primary font-semibold mono">40%</span>
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="/images/skills-accent-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Education & <span className="text-primary">Certifications</span>
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="glass-effect p-8 border-border/50">
              <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold">Bachelor's Degree in Web Design</p>
                <p className="text-sm text-muted-foreground">
                  IT Academy, University of Cambridge, Belgrade
                </p>
                <p className="text-xs text-muted-foreground mono">2011</p>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="glass-effect p-8 border-border/50">
              <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>SEMrush Academy (SEO Fundamentals, Technical SEO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>SEO Academy by Nathan Gotch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>GA4 for SEO (Jeff Sauer & Bastian Grimm)</span>
                </li>
              </ul>
            </Card>

            {/* Community Leadership */}
            <Card className="glass-effect p-8 border-border/50 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-primary">Community Leadership</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary">Church Volunteer Coordinator</Badge>
                <Badge variant="secondary">Rugby Club Member</Badge>
                <Badge variant="secondary">Former Youth Soccer Referee</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        {/* Gradient background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img
            src="/images/gradient-mesh-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect p-12 border-border/50 text-center">
              <div className="mb-8">
                <img
                  src="/images/teodor-2.png"
                  alt="Teodor Radovic"
                  className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-xl"
                />
              </div>

              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or SEO & AI
                consulting projects. Feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:Teodor.Radovic@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">Teodor.Radovic@gmail.com</span>
                </a>

                <a
                  href="tel:423-693-1182"
                  className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">423-693-1182</span>
                </a>

                <div className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">Chattanooga, TN</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/teodor-radovic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Teodor Radovic. All rights reserved.</p>
          <p className="mt-2">Senior SEO & AI Specialist | 15+ Years Experience</p>
        </div>
      </footer>
    </div>
  );
}
