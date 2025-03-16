import { motion } from 'framer-motion';
import { FaChartBar, FaDatabase, FaTable, FaPython, FaChartPie,} from 'react-icons/fa';
import { SiR } from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const iconAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.2, 1],
      transition: { duration: 2, repeat: Infinity }
    }
  };

  const skillCategories = [
    {
      title: 'Data Analysis',
      skills: [
        { name: 'Power BI', icon: <FaChartPie />, proficiency: 100 },
        { name: 'Excel', icon: <FaTable />, proficiency: 80 },
        { name: 'Tableau', icon: <FaChartBar />, proficiency: 60 }
      ]
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', icon: <FaPython />, proficiency: 60 },
        { name: 'R', icon: <SiR />, proficiency: 55 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'SQL', icon: <FaDatabase />, proficiency: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              whileHover={{ 
                translateY: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          variants={iconAnimation}
                          initial="initial"
                          animate="animate"
                          className="text-3xl text-blue-400"
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-medium text-gray-300">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
