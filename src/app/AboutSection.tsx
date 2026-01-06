import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '5+' },
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Award, label: 'Awards Won', value: '10+' },
  { icon: GraduationCap, label: 'Certifications', value: '15+' },
];

export function AboutSection() {
  const { theme } = useTheme();

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-2 rounded-full backdrop-blur-sm border border-current/20"
            style={{
              background: theme === 'light'
                ? 'rgba(255, 255, 255, 0.5)'
                : 'rgba(30, 30, 30, 0.5)',
            }}
          >
            About Me
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Who I Am
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-70">
            I'm a passionate developer who loves to create beautiful, functional, and user-friendly digital experiences. 
            With expertise in modern web technologies and a keen eye for design, I bring ideas to life.
          </p>
        </motion.div>

        {/* Profile Photo Section */}
        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Animated Glow Rings - Only Border Animation */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-60 blur-xl"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                  : 'linear-gradient(135deg, #a78bfa 0%, #c084fc 50%, #e879f9 100%)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.div
              className="absolute -inset-2 rounded-full opacity-40 blur-lg"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(225deg, #f093fb 0%, #f5576c 50%, #667eea 100%)'
                  : 'linear-gradient(225deg, #e879f9 0%, #ec4899 50%, #a78bfa 100%)',
              }}
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Photo Container - No Hover Effects */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
              }}
            >
              <ImageWithFallback
                src="https://media.licdn.com/dms/image/v2/D4D03AQGSfP_df49YSw/profile-displayphoto-shrink_800_800/B4DZWnCIRqH4Ac-/0/1742264109182?e=1768435200&v=beta&t=yRn6XcGhDPqPQkXKa3QP_8Kr9YDLeSaTEHToH9ZUSS8"
                alt="Roshan Thomas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative p-8 rounded-3xl backdrop-blur-sm border border-current/10 text-center overflow-hidden group cursor-pointer"
                style={{
                  background: theme === 'light'
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(30, 30, 30, 0.5)',
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: theme === 'light'
                      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(232, 121, 249, 0.1) 100%)',
                  }}
                />
                
                <Icon className="w-10 h-10 mx-auto mb-4 opacity-70" />
                <div className="text-3xl md:text-4xl mb-2" style={{ fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div className="text-sm opacity-60">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* About Content */}
        <motion.div
          className="relative p-12 rounded-3xl backdrop-blur-sm border border-current/10 overflow-hidden"
          style={{
            background: theme === 'light'
              ? 'rgba(255, 255, 255, 0.6)'
              : 'rgba(30, 30, 30, 0.6)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6" style={{ fontWeight: 700 }}>
                My Journey
              </h3>
              <p className="text-lg opacity-70 mb-6 leading-relaxed">
                From a curious beginner to a professional developer, my journey has been filled with learning, 
                creating, and pushing boundaries. I specialize in building modern web applications that not only 
                look great but also provide exceptional user experiences.
              </p>
              <p className="text-lg opacity-70 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, experimenting with motion graphics, 
                or contributing to open-source projects.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Frontend Development', value: 95 },
                { label: 'UI/UX Design', value: 90 },
                { label: 'Motion Design', value: 85 },
                { label: 'Backend Development', value: 80 },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="opacity-70">{skill.label}</span>
                    <span className="opacity-50">{skill.value}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: theme === 'light'
                          ? 'linear-gradient(90deg, #667eea, #764ba2)'
                          : 'linear-gradient(90deg, #a78bfa, #c084fc)',
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
