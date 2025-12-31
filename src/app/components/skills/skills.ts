import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  bgImage = `url(${document.baseURI}aboutbg.png)`;
   skillGroups = [
    {
      title: 'Backend Development',
      skills: [
        'ASP.NET Core',
        'ASP.NET Web API',
        '.NET Core',
        '.NET Framework',
        'ASP.NET Boilerplate',
        'ASP.NET Zero',
        'Dapper ORM',
        'Entity Framework Core',
        'LINQ',
        'API Development'
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        'Angular',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
        'PrimeNG',
        'Web Development',
        'Web Design'
      ]
    },
    {
      title: 'Databases',
      skills: [
        'Microsoft SQL Server',
        'SQL',
        'Microsoft SQL Server 2022'
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        'C#',
        'C',
        'C++',
        'Python',
        'JavaScript'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git',
        'WordPress',
        'Microsoft Office',
        'Excel',
        'Word',
        'PowerPoint'
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        'Object-Oriented Programming (OOP)',
        'Public Speaking',
        'PCB Design',
        'Altium Designer'
      ]
    }
  ];
}
