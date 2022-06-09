// Essa interface pertence a camada de dados da aplicação
export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

// Esse é um contrado, uma especificação que estamos separando do database.
// Assim, se eu trocar a depêndencia (database ORM), a aplicação deve continuar funcionando (SOLID)
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
