import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { 
  Car, 
  Zap, 
  Shield, 
  Users, 
  MapPin, 
  Clock, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const handleLogin = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-primary rounded-full p-2">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-gray-900">Prospera Go</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            </div>

            <Button 
              onClick={handleLogin}
              variant="outline" 
              size="sm"
              className="rounded-full"
            >
              {user ? 'Dashboard' : 'Sign In'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1">
            🚀 Now Available in Your City
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              Car Sharing
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience premium car sharing with instant access to luxury vehicles. 
            Book, unlock, and drive – all from your smartphone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="rounded-full px-8 py-3 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-3 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600">Premium Cars</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-600">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Prospera Go?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've reimagined car sharing to make it seamless, sustainable, and sophisticated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Access</h3>
                <p className="text-gray-600">
                  Unlock any car in seconds with our mobile app. No waiting, no hassle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Safety</h3>
                <p className="text-gray-600">
                  All vehicles are regularly inspected and equipped with advanced safety features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
                <p className="text-gray-600">
                  Join a community of conscious drivers making cities more sustainable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get on the road in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Find a Car</h3>
              <p className="text-gray-600">
                Use our app to locate the nearest available vehicle in your area.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Book & Unlock</h3>
              <p className="text-gray-600">
                Reserve your ride instantly and unlock the car with your smartphone.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Drive & Enjoy</h3>
              <p className="text-gray-600">
                Hit the road and enjoy your premium driving experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Commute?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of drivers who have already discovered the future of urban mobility.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleGetStarted}
              size="lg" 
              className="rounded-full px-8 py-3 text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              No membership fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              24/7 support
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-primary rounded-full p-2">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Prospera Go</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Prospera Go. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;