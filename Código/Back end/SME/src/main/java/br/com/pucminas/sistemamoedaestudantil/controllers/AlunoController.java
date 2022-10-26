package br.com.pucminas.sistemamoedaestudantil.controllers;

import br.com.pucminas.sistemamoedaestudantil.dtos.request.AlunoRequestDTO;
import br.com.pucminas.sistemamoedaestudantil.dtos.response.AlunoResponseDTO;
import br.com.pucminas.sistemamoedaestudantil.entities.Aluno;
import br.com.pucminas.sistemamoedaestudantil.services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path = "/api/aluno")
public class AlunoController {

    @Autowired
    private AlunoService service;

    @GetMapping(value = "/listar")
    public ResponseEntity listar(){
        List<AlunoResponseDTO> list = service.findAll();
        if (list.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Nenhum Aluno encontrado.");
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/mostrar/id/{id}")
    public ResponseEntity<AlunoResponseDTO> show(@PathVariable Integer id) throws Exception {
        AlunoResponseDTO obj = new AlunoResponseDTO(service.getById(id));
        return ResponseEntity.ok().body(obj);
    }

    @PostMapping(value = "/cadastrar")
    public ResponseEntity insert (@RequestBody AlunoRequestDTO dto) {
        ResponseEntity resp = service.insert(dto);
        return resp;
    }

    @DeleteMapping  (value = "/deletar/id/{id}")
    public void  delete (@PathVariable Integer id) throws Exception {
        service.deleteById(id);
    }
    
    @PutMapping  (value = "/update/id/{id}")
    public ResponseEntity<Aluno>  delete (@PathVariable Integer id,@RequestBody Aluno obj ) throws Exception {
       Aluno alunoAtualizado = service.update(id,obj);
       return ResponseEntity.ok().body(alunoAtualizado);
        
    }
}
