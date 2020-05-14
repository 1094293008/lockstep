

/**
 * 查找子物体
 */
export function getChildByName(node: cc.Node, childName: string): cc.Node {
    let names = childName.split("/");
    let child = node;
    for (let i = 0; i < names.length; i++) {
        child = child.getChildByName(names[i]);
    }
    return child;
}

export class f_Math {
    private static randomSeed = 5;
    static setRandSeed(seed: number) {
        this.randomSeed = seed;
    }

    static random() {
        this.randomSeed = (this.randomSeed * 9301 + 49297) % 233280;
        return this.randomSeed / 233280;
    }

    private static sinArr = [
        0, 0.017, 0.035, 0.052, 0.07, 0.087, 0.105, 0.122, 0.139, 0.156, 0.174, 0.191, 0.208, 0.225, 0.242, 0.259, 0.276, 0.292, 0.309, 0.326, 0.342, 0.358, 0.375, 0.391, 0.407, 0.423, 0.438,
        0.454, 0.469, 0.485, 0.5, 0.515, 0.53, 0.545, 0.559, 0.574, 0.588, 0.602, 0.616, 0.629, 0.643, 0.656, 0.669, 0.682, 0.695, 0.707, 0.719, 0.731, 0.743, 0.755, 0.766, 0.777, 0.788, 0.799,
        0.809, 0.819, 0.829, 0.839, 0.848, 0.857, 0.866, 0.875, 0.883, 0.891, 0.899, 0.906, 0.914, 0.921, 0.927, 0.934, 0.94, 0.946, 0.951, 0.956, 0.961, 0.966, 0.97, 0.974, 0.978, 0.982, 0.985,
        0.988, 0.99, 0.993, 0.995, 0.996, 0.998, 0.999, 0.999, 1, 1, 1, 0.999, 0.999, 0.998, 0.996, 0.995, 0.993, 0.99, 0.988, 0.985, 0.982, 0.978, 0.974, 0.97, 0.966, 0.961, 0.956, 0.951, 0.946,
        0.94, 0.934, 0.927, 0.921, 0.914, 0.906, 0.899, 0.891, 0.883, 0.875, 0.866, 0.857, 0.848, 0.839, 0.829, 0.819, 0.809, 0.799, 0.788, 0.777, 0.766, 0.755, 0.743, 0.731, 0.719, 0.707, 0.695,
        0.682, 0.669, 0.656, 0.643, 0.629, 0.616, 0.602, 0.588, 0.574, 0.559, 0.545, 0.53, 0.515, 0.5, 0.485, 0.469, 0.454, 0.438, 0.423, 0.407, 0.391, 0.375, 0.358, 0.342, 0.326, 0.309, 0.292,
        0.276, 0.259, 0.242, 0.225, 0.208, 0.191, 0.174, 0.156, 0.139, 0.122, 0.105, 0.087, 0.07, 0.052, 0.035, 0.017, 0, -0.017, -0.035, -0.052, -0.07, -0.087, -0.105, -0.122, -0.139, -0.156,
        -0.174, -0.191, -0.208, -0.225, -0.242, -0.259, -0.276, -0.292, -0.309, -0.326, -0.342, -0.358, -0.375, -0.391, -0.407, -0.423, -0.438, -0.454, -0.469, -0.485, -0.5, -0.515, -0.53,
        -0.545, -0.559, -0.574, -0.588, -0.602, -0.616, -0.629, -0.643, -0.656, -0.669, -0.682, -0.695, -0.707, -0.719, -0.731, -0.743, -0.755, -0.766, -0.777, -0.788, -0.799, -0.809, -0.819,
        -0.829, -0.839, -0.848, -0.857, -0.866, -0.875, -0.883, -0.891, -0.899, -0.906, -0.914, -0.921, -0.927, -0.934, -0.94, -0.946, -0.951, -0.956, -0.961, -0.966, -0.97, -0.974, -0.978,
        -0.982, -0.985, -0.988, -0.99, -0.993, -0.995, -0.996, -0.998, -0.999, -0.999, -1, -1, -1, -0.999, -0.999, -0.998, -0.996, -0.995, -0.993, -0.99, -0.988, -0.985, -0.982, -0.978, -0.974,
        -0.97, -0.966, -0.961, -0.956, -0.951, -0.946, -0.94, -0.934, -0.927, -0.921, -0.914, -0.906, -0.899, -0.891, -0.883, -0.875, -0.866, -0.857, -0.848, -0.839, -0.829, -0.819, -0.809,
        -0.799, -0.788, -0.777, -0.766, -0.755, -0.743, -0.731, -0.719, -0.707, -0.695, -0.682, -0.669, -0.656, -0.643, -0.629, -0.616, -0.602, -0.588, -0.574, -0.559, -0.545, -0.53, -0.515,
        -0.5, -0.485, -0.469, -0.454, -0.438, -0.423, -0.407, -0.391, -0.375, -0.358, -0.342, -0.326, -0.309, -0.292, -0.276, -0.259, -0.242, -0.225, -0.208, -0.191, -0.174, -0.156, -0.139,
        -0.122, -0.105, -0.087, -0.07, -0.052, -0.035, -0.017];
    static sin(angle: number) {
        angle = Math.round(angle) % 360;
        if (angle < 0) {
            angle += 360;
        }
        return this.sinArr[angle]
    }

    private static cosArr = [1, 1, 0.999, 0.999, 0.998, 0.996, 0.995, 0.993, 0.99, 0.988, 0.985, 0.982, 0.978, 0.974, 0.97, 0.966, 0.961, 0.956, 0.951, 0.946, 0.94, 0.934, 0.927, 0.921, 0.914,
        0.906, 0.899, 0.891, 0.883, 0.875, 0.866, 0.857, 0.848, 0.839, 0.829, 0.819, 0.809, 0.799, 0.788, 0.777, 0.766, 0.755, 0.743, 0.731, 0.719, 0.707, 0.695, 0.682, 0.669, 0.656, 0.643,
        0.629, 0.616, 0.602, 0.588, 0.574, 0.559, 0.545, 0.53, 0.515, 0.5, 0.485, 0.469, 0.454, 0.438, 0.423, 0.407, 0.391, 0.375, 0.358, 0.342, 0.326, 0.309, 0.292, 0.276, 0.259, 0.242,
        0.225, 0.208, 0.191, 0.174, 0.156, 0.139, 0.122, 0.105, 0.087, 0.07, 0.052, 0.035, 0.017, 0, -0.017, -0.035, -0.052, -0.07, -0.087, -0.105, -0.122, -0.139, -0.156, -0.174, -0.191,
        -0.208, -0.225, -0.242, -0.259, -0.276, -0.292, -0.309, -0.326, -0.342, -0.358, -0.375, -0.391, -0.407, -0.423, -0.438, -0.454, -0.469, -0.485, -0.5, -0.515, -0.53, -0.545, -0.559, -0.574,
        -0.588, -0.602, -0.616, -0.629, -0.643, -0.656, -0.669, -0.682, -0.695, -0.707, -0.719, -0.731, -0.743, -0.755, -0.766, -0.777, -0.788, -0.799, -0.809, -0.819, -0.829, -0.839, -0.848,
        -0.857, -0.866, -0.875, -0.883, -0.891, -0.899, -0.906, -0.914, -0.921, -0.927, -0.934, -0.94, -0.946, -0.951, -0.956, -0.961, -0.966, -0.97, -0.974, -0.978, -0.982, -0.985, -0.988,
        -0.99, -0.993, -0.995, -0.996, -0.998, -0.999, -0.999, -1, -1, -1, -0.999, -0.999, -0.998, -0.996, -0.995, -0.993, -0.99, -0.988, -0.985, -0.982, -0.978, -0.974, -0.97, -0.966,
        -0.961, -0.956, -0.951, -0.946, -0.94, -0.934, -0.927, -0.921, -0.914, -0.906, -0.899, -0.891, -0.883, -0.875, -0.866, -0.857, -0.848, -0.839, -0.829, -0.819, -0.809, -0.799, -0.788,
        -0.777, -0.766, -0.755, -0.743, -0.731, -0.719, -0.707, -0.695, -0.682, -0.669, -0.656, -0.643, -0.629, -0.616, -0.602, -0.588, -0.574, -0.559, -0.545, -0.53, -0.515, -0.5, -0.485,
        -0.469, -0.454, -0.438, -0.423, -0.407, -0.391, -0.375, -0.358, -0.342, -0.326, -0.309, -0.292, -0.276, -0.259, -0.242, -0.225, -0.208, -0.191, -0.174, -0.156, -0.139, -0.122, -0.105,
        -0.087, -0.07, -0.052, -0.035, -0.017, 0, 0.017, 0.035, 0.052, 0.07, 0.087, 0.105, 0.122, 0.139, 0.156, 0.174, 0.191, 0.208, 0.225, 0.242, 0.259, 0.276, 0.292, 0.309, 0.326, 0.342,
        0.358, 0.375, 0.391, 0.407, 0.423, 0.438, 0.454, 0.469, 0.485, 0.5, 0.515, 0.53, 0.545, 0.559, 0.574, 0.588, 0.602, 0.616, 0.629, 0.643, 0.656, 0.669, 0.682, 0.695, 0.707, 0.719,
        0.731, 0.743, 0.755, 0.766, 0.777, 0.788, 0.799, 0.809, 0.819, 0.829, 0.839, 0.848, 0.857, 0.866, 0.875, 0.883, 0.891, 0.899, 0.906, 0.914, 0.921, 0.927, 0.934, 0.94, 0.946, 0.951,
        0.956, 0.961, 0.966, 0.97, 0.974, 0.978, 0.982, 0.985, 0.988, 0.99, 0.993, 0.995, 0.996, 0.998, 0.999, 0.999, 1];
    static cos(angle: number) {
        angle = Math.round(angle) % 360;
        if (angle < 0) {
            angle += 360;
        }
        return this.cosArr[angle];
    }

    private static tanArr = [0, 0.017, 0.035, 0.052, 0.07, 0.087, 0.105, 0.123, 0.141, 0.158, 0.176, 0.194, 0.213, 0.231, 0.249, 0.268,
        0.287, 0.306, 0.325, 0.344, 0.364, 0.384, 0.404, 0.424, 0.445, 0.466, 0.488, 0.51, 0.532, 0.554, 0.577, 0.601, 0.625, 0.649, 0.675,
        0.7, 0.727, 0.754, 0.781, 0.81, 0.839, 0.869, 0.9, 0.933, 0.966, 1, 1.036, 1.072, 1.111, 1.15, 1.192, 1.235, 1.28, 1.327, 1.376, 1.428,
        1.483, 1.54, 1.6, 1.664, 1.732, 1.804, 1.881, 1.963, 2.05, 2.145, 2.246, 2.356, 2.475, 2.605, 2.747, 2.904, 3.078, 3.271, 3.487, 3.732,
        4.011, 4.331, 4.705, 5.145, 5.671, 6.314, 7.115, 8.144, 9.514, 11.43, 14.301, 19.081, 28.636, 57.29, Infinity]
    static atan2(y: number, x: number) {
        let tmp = y / x;
        if (tmp < 0) {
            tmp = -tmp;
        }
        let angle = 0;
        let tanArr = this.tanArr;
        while (tmp > tanArr[angle]) {
            angle++;
        }
        if (y >= 0) {
            if (x <= 0) {
                angle = 180 - angle;
            }
        } else if (x <= 0) {
            angle += 180;
        } else {
            angle = 360 - angle;
        }
        return angle;
    }

    /**
     * 随机获取数组下标
     */
    static randIntNum(num: number) {
        return Math.floor(this.random() * num);
    }


    /**
     * 随机数组中的一个元素
     */
    static randArrElement<T>(arr: T[]) {
        return arr[this.randIntNum(arr.length)];
    }

}


export function removeFromArr<T>(arr: T[], one: T) {
    let index = arr.indexOf(one);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}


export function isAlive(obj: any) {
    return obj && obj.alive;
}