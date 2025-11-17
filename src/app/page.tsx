"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Building, Crosshair, Heart, Instagram, Shield, Star, Target, TrendingUp, Twitter, Users, Youtube } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="dotGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="MARINE HOUSEWIVES"
          button={{
            text: "Join Marines",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="From Housewife to Marine Excellence"
          description="Transform from domestic duties to military precision. Master marine combat skills, amphibious warfare, and strategic operations in our specialized training programs designed for dedicated housewives."
          tag="Semper Fidelis"
          tagIcon={Shield}
          buttons={[
            {
              text: "Enlist Today",
              href: "contact"
            },
            {
              text: "Marine Corps Info",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763395281490-aan67n1o.jpg",
              imageAlt: "Marine training session"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763395281617-625gpteg.jpg",
              imageAlt: "Amphibious operations training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763395281356-bor39sru.jpg",
              imageAlt: "Marine rifle training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763395281733-miq9tgko.jpg",
              imageAlt: "Combat conditioning"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394436860-00ckc9xw.jpg",
              imageAlt: "Marine tactical gear"
            }
          ]}
        />
      </div>

      <div id="housewives-marine" data-section="housewives-marine">
        <TagAbout
          tag="For Housewives Only"
          description="At Marine Housewives Corps, we believe every homemaker has the potential to become an elite marine. Our specialized program transforms dedicated housewives into disciplined marines while honoring their commitment to family and home. From kitchen to combat zone, we prepare you for both domestic excellence and military precision. Join the ranks of proud marine housewives who serve their families and their country with equal dedication and honor."
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Marine Excellence"
          description={[
            "We specialize in transforming dedicated housewives into disciplined marine operators. Our comprehensive program combines traditional Marine Corps training with real-world domestic responsibilities.",
            "From amphibious assault techniques to advanced marksmanship, our marine training facility provides the ultimate environment for developing marine skills while maintaining excellence in home management and family care."
          ]}
          buttons={[
            {
              text: "View Training",
              href: "feature"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Marine Corps Training Programs"
          description="Master essential marine warfare skills designed specifically for housewives balancing family life with military excellence and marine corps traditions."
          tag="Marine Training"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Amphibious Operations",
              description: "Master marine amphibious assault tactics in our specialized training facility with water-based scenarios, beach landings, and marine tactical decision-making.",
              icon: Building
            },
            {
              title: "Marine Rifle Training",
              description: "Comprehensive marine firearms training covering M16A4, M4 carbines, and marine weapons systems with emphasis on marine marksmanship standards.",
              icon: Crosshair
            },
            {
              title: "Combat Leadership",
              description: "Learn advanced marine leadership techniques including squad tactics, marine chain of command, and tactical positioning in various combat environments.",
              icon: Building
            },
            {
              title: "Marine Survival",
              description: "Essential marine survival training covering field medicine, emergency response, threat assessment, and protection protocols following marine corps standards.",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Marine Training Impact"
          description="Measurable results from our intensive marine training programs designed specifically for dedicated housewives."
          tag="Marine Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "750+",
              title: "Marines",
              description: "Housewives earned marine status",
              icon: Users
            },
            {
              id: "2",
              value: "99%",
              title: "Honor",
              description: "Pass rate on marine assessments",
              icon: Award
            },
            {
              id: "3",
              value: "24/7",
              title: "Semper Fi",
              description: "Marine readiness capability",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Marine Success Stories"
          description="Real experiences from housewives who completed our marine corps training program and earned their marine status."
          tag="Marine Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Mother of Two, Marine Graduate",
              testimonial: "The marine training transformed me from a regular housewife into a disciplined marine who can protect my family with marine corps precision. Semper Fi!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394437520-ki9b06i1.jpg",
              imageAlt: "Sarah Mitchell marine portrait"
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Homemaker, Marine Specialist",
              testimonial: "I never thought I could balance family duties with marine training, but this program made it possible. Now I'm a proud marine mother ready for anything.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394438132-6ijnc1c5.jpg",
              imageAlt: "Maria Rodriguez marine portrait"
            },
            {
              id: "3",
              name: "Jessica Chen",
              role: "Working Mom, Marine Expert",
              testimonial: "The marine rifle training was exceptional. I went from never holding a weapon to mastering marine marksmanship while still managing my household duties.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394438804-5gnpcbat.jpg",
              imageAlt: "Jessica Chen marine portrait"
            },
            {
              id: "4",
              name: "Amanda Thompson",
              role: "Stay-at-home Mom, Marine Instructor",
              testimonial: "This marine program changed my life. I'm now qualified to teach other housewives marine skills while maintaining my role as a devoted marine mother.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394439307-4dhkro98.jpg",
              imageAlt: "Amanda Thompson marine portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Marine Organizations"
          description="Our marine training methods are recognized and endorsed by major marine corps institutions and military organizations worldwide."
          tag="Marine Recognition"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394440668-2kekadrn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394441313-h3tg589x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394442176-unyundgd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394442971-m5efye40.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394443481-u7n9d5l2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394444062-h5j4f16d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394444719-hzvxvw8h.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Enlist Now"
          tagIcon={Shield}
          title="Ready to Become a Marine?"
          description="Start your transformation from housewife to marine. Get information about our marine corps programs and schedule your marine assessment."
          inputPlaceholder="Enter your email"
          buttonText="Join Marines"
          termsText="By enlisting, you agree to our marine training protocols and marine corps standards."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="MARINE HOUSEWIVES"
          columns={[
            {
              title: "Marine Training",
              items: [
                {
                  label: "Programs",
                  href: "feature"
                },
                {
                  label: "Marine Base",
                  href: "about"
                },
                {
                  label: "Weapons",
                  href: "feature"
                }
              ]
            },
            {
              title: "Marine Support",
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Marine FAQ",
                  href: "#"
                },
                {
                  label: "Marine Safety",
                  href: "#"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/marinehousewives",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/marinehousewives",
              ariaLabel: "Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/marinehousewives",
              ariaLabel: "YouTube"
            }
          ]}
          copyrightText="© 2025 | MARINE HOUSEWIVES CORPS"
        />
      </div>
    </ThemeProvider>
  );
}