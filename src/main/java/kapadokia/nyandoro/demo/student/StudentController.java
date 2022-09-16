package kapadokia.nyandoro.demo.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("students")
public class StudentController {
    @GetMapping
    public List<Student> getAllStudent(){
        return List.of(
                new Student(UUID.randomUUID(),
                        "Kapadokia",
                        "Nyandoro",
                        "kapadokia@mail.com",
                        Student.Gender.MALE),
                new Student(UUID.randomUUID(),
                        "brenda",
                        "wangeci",
                        "brendawangeci@mail.com",
                        Student.Gender.FEMALE)
        );
    }
}
