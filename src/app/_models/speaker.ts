export class Speaker {
    constructor(
        public _id: String,
        public email: String,
        public userName: String,
        public password: String,
        public address: {
            city: String,
            street: String,
            buildingNumber: String,
        }
    ) {

    }
}
