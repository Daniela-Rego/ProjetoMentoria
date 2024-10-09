import { Connection, Channel, ConsumeMessage, connect, Message } from "amqplib";
import PostEntity from "../entities/PostEntity";
import IPostbody from "../interfaces/PostBodyInterface";
import { METHODS } from "http";
const RETRY_DELAY = 10000; // 5 segundos

class RabbitmqServices {
    private connection!: Connection;
    private channel!: Channel;
    private exchange: any;

    async connect() {
        try {
            console.log("entrei em RabbitmqServices connect")
            this.connection = await connect('amqp://fila_user:123456@rabbitmq:5672')
            this.channel = await this.connection.createChannel();
            this.exchange = await this.channel.assertExchange("amq.direct", "direct");
            console.log("criou um this.exchange: ", this.exchange)
        } catch (e) {
            console.log("Deu erro no RabbitmqServices connect: ", e)
            setTimeout(() => this.connect(), RETRY_DELAY);
        }

    }

   /* async sendMessage(queue: string, message: any) {
        console.log("entrei no sendMessage")
        try {
            const teste = await this.channel.sendToQueue(queue, Buffer.from(message))
            console.log("teste: ", teste)
        } catch (error) {
            console.log("entrei no catch sendMessage: ", error)
        }

    }*/

    async publishInExchange(exchange: string, routngkey: string, message: IPostbody): Promise<Boolean> {

        return await this.channel.publish(exchange, routngkey, Buffer.from(JSON.stringify(message)))
    }

    async consumer(queue: string, callback: (message: Message) => void) {
        return this.channel.consume(queue, async (message) => {

            if (!this.channel) {
                this.recreateChannel();
            }

            callback(message!);
            this.channel.ack(message!);


        })
    };

    async recreateChannel() {
        try {
            if (!this.connection) {
                console.error("A conexão não está disponível, tentando reconectar...");
                await this.connect();
            } else {
                console.log("Recriando o canal...");
                this.channel = await this.connection.createChannel();
                this.exchange = await this.channel.assertExchange("amq.direct", "direct");
                console.log("Canal recriado com sucesso.");
            }
        } catch (err) {
            console.error("Erro ao recriar o canal:", err);
        }
    }






}
const mqConnection = new RabbitmqServices();

export default mqConnection;
