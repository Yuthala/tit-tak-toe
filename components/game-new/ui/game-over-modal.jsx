import { UIModal } from '../components/uikit/ui-modal';
import { UiButton } from '../components/uikit/ui-button';

export function GameOverModal() {
    return (  
        <UIModal width="md" isOpen={winnerSymbol} onClose={() => console.log('close')}>
            <UIModal.Header>Игра завершена</UIModal.Header>
            <UIModal.Body>
                <div className="text-sm">
                    Победитель: <span className="text-teal-600">User 1302</span>
                </div>
            </UIModal.Body>
            <UIModal.Footer>
                <UiButton size="md" variant="outline">Вернуться</UiButton>
                <UiButton size="md" variant="primary">Играть снова</UiButton>
            </UIModal.Footer>
        </UIModal>
    );
}
