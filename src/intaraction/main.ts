interface Employee {
    id: bigint;                 
    name: string;               
    role: string;               
    alternance: boolean;         
    yearsOfExperience: number;  
    augmentation: Date | null; 
    status: 'entreprise' | 'école' | 'vacance'; 
  
       
  }
  
  const Louis: Employee = {
    id: 12345678901234567890n,   
    name: "Louis Davin",            
    role: "devellopeur",   
    alternance: true,              
    yearsOfExperience: 15,       
    augmentation: new Date('28/09/2024'), 
    status: 'école',            
    
        
  };

  // On écoute l'événement de scroll
window.addEventListener('scroll', () => {
  const title = document.getElementById('title');
  if (title) {
      if (window.scrollY > 50) {
          // Ajoute la classe 'scrolled' si on a scrollé plus de 50px
          title.classList.add('scrolled');
      } else {
          // Retire la classe 'scrolled' si on revient en haut
          title.classList.remove('scrolled');
      }
  }
});

  

                                   