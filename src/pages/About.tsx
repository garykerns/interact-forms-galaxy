import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-center">About Us</h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          We believe in creating beautiful, intuitive experiences that make technology feel more human. 
          Our platform is built with attention to detail and a focus on user experience.
        </p>
      </div>
    </motion.div>
  );
};

export default About;