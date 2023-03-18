class Lexer { 
    input: string;
    position: number;
  
    constructor(input: string) {
      this.input = input;
      this.position = 0;
    }

    public nextToken(): Token | null {
        // TODO: implement lexer logic
        import { Lexer, Token }  from ''
        if (this.position >= this.input.length) {
            return null;
        }

        const token = new Token("identifier", this.input[this.position]);
        this.position++;
        return token;
    }
}

class Token {
    type: string;
    value: any;

    constructor(type: string, value: any) {
        this.type = type;
        this.value = value;
    }
}