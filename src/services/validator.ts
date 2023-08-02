import { IValidatorConfig } from '../types/validator.type';

export const validator = (data: Record<string, string>, config: IValidatorConfig, errors: Record<string, string>): Record<string, string> => {
    const validateErrors = {
        ...errors
    };

    const validate = (validateType: string, validationData: string, rule: Record<string, string>): string | undefined => {
        switch (validateType) {
            case 'isRequired': {
                if (validationData.trim() === '') {
                    return rule.message;
                }
                break;
            }
            case 'isEmail': {
                // eslint-disable-next-line
                const emailRegexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                if (!emailRegexp.test(validationData)) {
                    return rule.message;
                }
            }
                break;
            case 'isQualities': {
                if (!validationData.length) {
                    return rule.message;
                }
                break;
            }
            default:
                return '';
        }
    };

    for (const fieldName in data) {
        const validationRules = config[fieldName];
        for (const validateType in validationRules) {
            const error = validate(validateType, data[fieldName], config[fieldName][validateType]);
            validateErrors[fieldName] = error as string;

            if (error) {
                break;
            }
        }
    }

    return validateErrors;
};

export const validatorConfig = {
    name: {
        isRequired: {
            message: 'Имя обязательно для заполнения'
        }
    },
    email: {
        isRequired: {
            message: 'Email обязателен для заполнения'
        },
        isEmail: {
            message: 'Email не корректный'
        }
    },
    profession: {
        isRequired: {
            message: 'Профессия обязательна для заполнения'
        }
    },
    qualities: {
        isQualities: {
            message: 'Надо выбрать качества'
        }
    }
};
