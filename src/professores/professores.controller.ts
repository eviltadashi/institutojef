import { Controller, Get } from "@nestjs/common";


@Controller('/professores')
export class professoresController{

    @Get()
    async getProfessores(){
        return {
            id:'1',
            nome:'teste controller'
        };
    }
    


}
