import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent implements OnInit {
  btnText = "Compartilhar!!!"

  constructor(private momentService: MomentService, 
              private messageService: MessagesService,
              private router: Router
  ) {}

  ngOnInit(): void { 
}

  async createHandler(moment: Moment) {
    console.log(moment)

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image) {
      formData.append('image', moment.image);
    }

    //todo

    //enviar paara o service
    await this.momentService.createMoment(formData).subscribe();

    //exibir msg
    this.messageService.add("Momento adicionado com sucesso!!!")

    //redirect para sair do form para outra pagina
    this.router.navigate(['/']);    


  }
}
