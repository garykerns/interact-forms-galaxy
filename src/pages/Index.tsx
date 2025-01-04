import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-md space-y-4 text-center"
        >
          <h2 className="text-2xl font-semibold">Loading...</h2>
          <Progress value={100} className="w-full" />
          <p className="text-muted-foreground">Please wait while we load your content</p>
        </motion.div>
      </div>
    );
  }

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