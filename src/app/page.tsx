"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Building, Crosshair, Heart, Home, Instagram, Shield, Star, Target, TrendingUp, Twitter, Users, Youtube } from "lucide-react";

export default function Home() {
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
          brandName="WAR TACTICAL"
          button={{
            text: "Join Training",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Elite War Training for Housewives"
          description="Transform from homemaker to tactical operative. Master combat skills, weapons training, and strategic warfare techniques in our specialized killhouse facility."
          tag="Tactical Excellence"
          tagIcon={Shield}
          buttons={[
            {
              text: "Start Training",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394434107-e0bmyyx7.jpg",
              imageAlt: "Tactical training session"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394434827-myewka72.jpg",
              imageAlt: "Stealth operations training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394435667-vuxq5ghk.jpg",
              imageAlt: "Firearms training course"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394436160-7fahmkco.jpg",
              imageAlt: "Self defense training"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394436860-00ckc9xw.jpg",
              imageAlt: "Tactical equipment"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Tactical Training"
          description={[
            "We specialize in transforming everyday housewives into skilled tactical operators. Our comprehensive program combines military-grade combat training with real-world survival scenarios.",
            "From urban warfare techniques to advanced marksmanship, our killhouse facility provides the ultimate training environment for developing lethal skills while maintaining the responsibilities of home life."
          ]}
          buttons={[
            {
              text: "View Programs",
              href: "feature"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Combat Training Programs"
          description="Master essential warfare skills designed specifically for housewives balancing family life with tactical excellence."
          tag="Training Modules"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Killhouse Operations",
              description: "Master close-quarters combat in our realistic killhouse facility with moving targets, live-fire scenarios, and tactical decision-making under pressure.",
              icon: Home
            },
            {
              title: "Weapons Mastery",
              description: "Comprehensive firearms training covering pistols, rifles, and tactical weapons with emphasis on accuracy, speed, and safety protocols.",
              icon: Crosshair
            },
            {
              title: "Urban Warfare",
              description: "Learn advanced combat techniques for urban environments including room clearing, stealth movement, and tactical positioning in residential areas.",
              icon: Building
            },
            {
              title: "Survival Skills",
              description: "Essential survival training covering field medicine, emergency response, threat assessment, and protection of family members during crisis situations.",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Training Impact"
          description="Measurable results from our intensive tactical training programs for housewives."
          tag="Results"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "500+",
              title: "Trained",
              description: "Housewives completed tactical training",
              icon: Users
            },
            {
              id: "2",
              value: "98%",
              title: "Success",
              description: "Pass rate on combat assessments",
              icon: Award
            },
            {
              id: "3",
              value: "24/7",
              title: "Ready",
              description: "Emergency response capability",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Success Stories"
          description="Real experiences from housewives who completed our tactical training program."
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Mother of Two, Tactical Graduate",
              testimonial: "The killhouse training transformed me from a regular mom into someone who can protect my family in any situation. The skills I learned are invaluable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394437520-ki9b06i1.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              role: "Homemaker, Combat Specialist",
              testimonial: "I never thought I could balance family duties with tactical training, but this program made it possible. Now I'm confident and prepared for anything.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394438132-6ijnc1c5.jpg",
              imageAlt: "Maria Rodriguez portrait"
            },
            {
              id: "3",
              name: "Jessica Chen",
              role: "Working Mom, Defense Expert",
              testimonial: "The weapons training was exceptional. I went from never holding a gun to becoming proficient in multiple firearms while still managing my household.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394438804-5gnpcbat.jpg",
              imageAlt: "Jessica Chen portrait"
            },
            {
              id: "4",
              name: "Amanda Thompson",
              role: "Stay-at-home Mom, Tactical Instructor",
              testimonial: "This program changed my life. I'm now qualified to teach other housewives tactical skills while maintaining my role as a devoted mother.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763394439307-4dhkro98.jpg",
              imageAlt: "Amanda Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="Our tactical training methods are recognized and endorsed by major corporations and institutions worldwide."
          tag="Recognition"
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
          tag="Join Now"
          tagIcon={Shield}
          title="Ready to Begin Your Training?"
          description="Start your transformation from housewife to tactical operative. Get information about our programs and schedule your assessment."
          inputPlaceholder="Enter your email"
          buttonText="Start Training"
          termsText="By signing up, you agree to our training protocols and safety requirements."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="WAR TACTICAL"
          columns={[
            {
              title: "Training",
              items: [
                {
                  label: "Programs",
                  href: "feature"
                },
                {
                  label: "Killhouse",
                  href: "about"
                },
                {
                  label: "Weapons",
                  href: "feature"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "#"
                },
                {
                  label: "Safety",
                  href: "#"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/wartactical",
              ariaLabel: "Instagram"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/wartactical",
              ariaLabel: "Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/wartactical",
              ariaLabel: "YouTube"
            }
          ]}
          copyrightText="© 2025 | WAR TACTICAL TRAINING CENTER"
        />
      </div>
    </ThemeProvider>
  );
}