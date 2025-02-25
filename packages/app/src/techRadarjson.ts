import {
    RadarRing,
    RadarQuadrant,
    RadarEntry,
    TechRadarLoaderResponse,
  } from '@backstage-community/plugin-tech-radar-common';
  
  const rings = [
    { id: 'adopt', name: 'ADOPT', color: '#5BA300', description: 'Recommended for immediate adoption.' },
    { id: 'trial', name: 'TRIAL', color: '#009EB0', description: 'Worth trying and evaluating.' },
    { id: 'assess', name: 'ASSESS', color: '#C7BA00', description: 'Potential technology, keep an eye on it.' },
    { id: 'hold', name: 'HOLD', color: '#E09B96', description: 'Not recommended for use.' },
  ];
  
  const quadrants = [
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'cloud', name: 'Cloud' },
  ];
  
  const entries = [
    // ADOPT - All tools from your company radar
    // Languages
    { key: 'python', id: 'python', title: 'Python', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'java', id: 'java', title: 'Java', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'javascript', id: 'javascript', title: 'JavaScript', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'typescript', id: 'typescript', title: 'TypeScript', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'go', id: 'go', title: 'Go', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'csharp', id: 'csharp', title: 'C#', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'ruby', id: 'ruby', title: 'Ruby', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'rust', id: 'rust', title: 'Rust', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'kotlin', id: 'kotlin', title: 'Kotlin', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'swift', id: 'swift', title: 'Swift', quadrant: 'languages', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
  
    // Frameworks
    { key: 'react', id: 'react', title: 'React.js', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'angular', id: 'angular', title: 'Angular', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'vue', id: 'vue', title: 'Vue.js', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'nextjs', id: 'nextjs', title: 'Next.js', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'django', id: 'django', title: 'Django', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'flask', id: 'flask', title: 'Flask', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'spring-boot', id: 'spring-boot', title: 'Spring Boot', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'express', id: 'express', title: 'Express.js', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'aspnetcore', id: 'aspnetcore', title: 'ASP.NET Core', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'fastapi', id: 'fastapi', title: 'FastAPI', quadrant: 'frameworks', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
  
    // Infrastructure
    { key: 'docker', id: 'docker', title: 'Docker', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'kubernetes', id: 'kubernetes', title: 'Kubernetes', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'terraform', id: 'terraform', title: 'Terraform', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'ansible', id: 'ansible', title: 'Ansible', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'helm', id: 'helm', title: 'Helm', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'prometheus', id: 'prometheus', title: 'Prometheus', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'grafana', id: 'grafana', title: 'Grafana', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'argocd', id: 'argocd', title: 'ArgoCD', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'jenkins', id: 'jenkins', title: 'Jenkins', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'gitlab', id: 'gitlab', title: 'GitLab CI/CD', quadrant: 'infrastructure', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
  
    // Cloud
    { key: 'aws', id: 'aws', title: 'AWS', quadrant: 'cloud', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'azure', id: 'azure', title: 'Azure', quadrant: 'cloud', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'gcp', id: 'gcp', title: 'Google Cloud (GCP)', quadrant: 'cloud', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'vmware', id: 'vmware', title: 'VMware vSphere/vCloud', quadrant: 'cloud', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'openstack', id: 'openstack', title: 'OpenStack', quadrant: 'cloud', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
    { key: 'openshift', id: 'openshift', title: 'Red Hat OpenShift', quadrant: 'cloud', timeline: [{ ringId: 'adopt', date: new Date('2024-02-20') }] },
  
    // TRIAL - Market Tools
    { key: 'k8s-operator', id: 'k8s-operator', title: 'Kubernetes Operators', quadrant: 'infrastructure', timeline: [{ ringId: 'trial', date: new Date('2024-02-20') }] },
    { key: 'pulumi', id: 'pulumi', title: 'Pulumi', quadrant: 'infrastructure', timeline: [{ ringId: 'trial', date: new Date('2024-02-20') }] },
    { key: 'vercel', id: 'vercel', title: 'Vercel', quadrant: 'infrastructure', timeline: [{ ringId: 'trial', date: new Date('2024-02-20') }] },
  
    // ASSESS - Market Tools
    { key: 'google-cloud-vertex-ai', id: 'google-cloud-vertex-ai', title: 'Google Cloud Vertex AI', quadrant: 'cloud', timeline: [{ ringId: 'assess', date: new Date('2024-02-20') }] },
    { key: 'databricks', id: 'databricks', title: 'Databricks', quadrant: 'cloud', timeline: [{ ringId: 'assess', date: new Date('2024-02-20') }] },
  
    // HOLD - Market Tools
    { key: 'docker-swarm', id: 'docker-swarm', title: 'Docker Swarm', quadrant: 'infrastructure', timeline: [{ ringId: 'hold', date: new Date('2024-02-20') }] },
    { key: 'vagrant', id: 'vagrant', title: 'Vagrant', quadrant: 'infrastructure', timeline: [{ ringId: 'hold', date: new Date('2024-02-20') }] },
    { key: 'heroku', id: 'heroku', title: 'Heroku', quadrant: 'cloud', timeline: [{ ringId: 'hold', date: new Date('2024-02-20') }] },
  ];
  
  export const data: TechRadarLoaderResponse = { entries, quadrants, rings };
  