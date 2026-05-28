import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import { Testimonials, WhyChoose } from "@/components/WhyChooseAndTestimonials";


export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <Featured></Featured>
      <WhyChoose></WhyChoose>
      <Testimonials></Testimonials>
    </div>
  );
}
