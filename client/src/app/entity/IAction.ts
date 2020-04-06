interface IAction {
    use_q(x: number, y: number): void;

    use_w(): void;

    use_e(): void;

    use_r(): void;

    base(): void;

    runLeft(): void;

    runRight(): void;

    runDown(): void;

    runUp(): void;
    run(x: number, y: number);
}
