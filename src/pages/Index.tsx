import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';

const Index = () => {
  const { user } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {user ? `Welcome, ${user.name}` : 'Welcome to Our Platform'}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A beautiful, minimal platform designed with attention to detail.
        </p>
      </div>
    </motion.div>
  );
};

export default Index;