import Section from './Section';

export default function SkillSection() {
  const skills = [
    { name: 'Java', img: '/skills/java.svg' },
    { name: 'Spring Boot', img: '/skills/springboot.svg' },
    { name: 'RxJava', img: '/skills/rxjava.svg' },
    { name: 'MySQL', img: '/skills/mysql.svg' },
    { name: 'Vue.js', img: '/skills/vue.svg' },
    { name: 'React.js', img: '/skills/react.svg' },
    { name: 'PHP', img: '/skills/php.svg' },
    { name: 'AWS', img: '/skills/aws.svg' },
    { name: 'docker', img: '/skills/docker.svg' },
    { name: 'Kubernetes', img: '/skills/kubernetes.svg' },
    { name: 'CI/CD', img: '/skills/cicd.svg' },
  ];

  return (
    <Section id="skill" title="Skill" className="bg-gray-50">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <li key={skill.name} className="flex flex-col items-center">
            <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-2" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
