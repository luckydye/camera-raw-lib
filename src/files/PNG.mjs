import { BinaryFile } from "@luckydye/binary-file-lib";

export default class PNGFile extends BinaryFile {

    static parseFile(file) {
        // read file header
        
    }

    async getThumbnail() {
        return new Blob([this.buffer], { type: "image/png" });
    }

}
