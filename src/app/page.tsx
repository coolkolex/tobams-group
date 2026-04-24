import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainingSection from "@/components/TrainingSection";
import ManagementSection from "@/components/ManagementSection";
import LMSSection from "@/components/LMSSection";
import CEOSection from "@/components/CEOSection";
import TrainingConsultantSection from "@/components/TrainingConsultantSection";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import { corporateItems, individualItems, capacityItems } from "@/components/Helper";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* Corporate Trainings */}
        <TrainingSection
          title="Corporate Trainings"
          description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
          items={corporateItems}
          imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
          imageAlt="Corporate training session with a presenter and engaged team members around a table"
          imageRight={false}
        />

        {/* Personalised Individual Training */}
        <TrainingSection
          title="Personalised Individual Training"
          description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
          items={individualItems}
          imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
          imageAlt="Individual professional in a focused training session"
          imageRight={true}
        />

        {/* Capacity Development */}
        <TrainingSection
          title="Capacity Development"
          description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
          items={capacityItems}
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
          imageAlt="Team workshop for capacity development with a presenter at a whiteboard"
          imageRight={false}
        />

        {/* Management Development Program */}
        <ManagementSection />

        {/* Learning Management System */}
        <LMSSection />

        {/* CEO Transformation Hub */}
        <CEOSection />

        {/* Training The Consultant */}
        <TrainingConsultantSection />

        {/* CTA Banner */}
        <CTABanner />

        {/* Testimonials */}
        <Testimonials />

        {/* Pre-footer CTA */}
        <PreFooterCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
